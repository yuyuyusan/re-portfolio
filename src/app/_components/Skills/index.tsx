import styles from './index.module.scss';
const languageSkills = [
  { name: 'HTML/SCSS', level: 5 },
  { name: 'JavaScript', level: 4 },
  { name: 'TypeScript', level: 2 },
  { name: 'React', level: 3 },
  { name: 'Next.js', level: 3 },
  { name: 'Vue', level: 2 },
  { name: 'Nuxt.js', level: 1 },
  { name: 'Astro', level: 3 },
  { name: 'Node.js', level: 3 },
  { name: 'Express', level: 2 },
];
const softSkills = [
  { name: 'Tailwind CSS', level: 3 },
  { name: 'Webpack', level: 3 },
  { name: 'Vite', level: 2 },
  { name: 'Vercel', level: 3 },
  { name: 'Firebase', level: 2 },
  { name: 'MongoDB', level: 2 },
  { name: 'MySQL', level: 1 },
  { name: 'Storybook', level: 1 },
];
const designSkills = [
  { name: 'Figma', level: 3 },
  { name: 'Adobe XD', level: 3 },
  { name: 'Photoshop', level: 3 },
  { name: 'Illustrator', level: 2 },
  { name: 'After Effects', level: 1 },
  { name: 'Lightroom', level: 1 },
];
interface Skill {
  name: string;
  level: number;
}

interface SkillListProps {
  skills: Skill[];
  title: string;
}


function SkillCircle({ num }: { num: number }) {
  const getGradientStyle = (level: number) => {
    const gradientStart = 0;
    const gradientEnd = (level / 5) * 100;
    return {
      backgroundImage: `conic-gradient(#d5525f ${gradientStart}% ${gradientEnd}%, #d2d2d2 ${gradientEnd}% 100%)`,
    };
  };
  let levelText;
  if (num * 20 >= 80) {
    levelText = '上級';
  } else if (num * 20 >= 21) {
    levelText = '中級';
  } else {
    levelText = '初級';
  }
  return (
    <div className={styles.skill__circle} style={getGradientStyle(num)}>
      <span className={styles.num}>{levelText}</span>
    </div>
  );
}


function SkillList({ skills, title }: SkillListProps) {
  return (
    <div className={styles.skillBox}>
      <h2 className={styles.skillTitle}>{title}</h2>
      <ul className={styles.skillList}>
        {skills.map((skill, index) => (
          <li className={styles.skillItem} key={index}>
            <div className={styles.skill__name}>{skill.name}</div>
            <SkillCircle num={skill.level} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <SkillList skills={languageSkills} title="Language Skill" />
      <SkillList skills={softSkills} title="Soft Skill" />
      <SkillList skills={designSkills} title="Design Skill" />
    </>
  );
}
