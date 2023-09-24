'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.scss';

type CategoryData = {
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: number;
};

export default function Wakatime() {
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);

  useEffect(() => {
    const fetchWakatimeData = async () => {
      try {
        const response = await axios.get(
          'https://wakatime.com/api/v1/users/yuyuyusan/stats'
        );
        setCategoryData(response.data.data.categories);
      } catch (error) {
        console.error('Wakatime APIからデータを取得できませんでした:', error);
      }
    };

    fetchWakatimeData();
  }, []);

  return (
    <div className={styles.myScore}>
      {categoryData.map((item, index) => (
        <div className={styles.myScoreItem} key={index}>
          <div className={styles.myScoreItemTitle}>
            <h3>{item.name}</h3>
          </div>
          <div className={styles.myScoreItemScore}>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
