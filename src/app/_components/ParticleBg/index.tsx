'use client';
import TSParticles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

export default function ParticleBg() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <TSParticles
      init={particlesInit}
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        text: {
          // 表示するテキスト
          value: 'SHITSUKAWA',
          // フォントサイズ
          size: 80,
          // フォントのスタイル
          font: 'bold',
          // テキストの色
          color: '#ffffff',
          // パーティクルとテキストの間の距離
          distance: 100,
        },
        // テキストが集まるアニメーション
        move: {
          enable: true,
          speed: 2,
          // パーティクルがテキストに集まるように
          attract: {
            enable: true,
            rotateX: 3000,
            rotateY: 3000,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
