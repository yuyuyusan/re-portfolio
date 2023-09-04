import styles from './index.module.scss';

type Skills = {
  name: string;
  level: number;
};
const languageSkills: Skills[] = [
  { name: 'HTML/SCSS', level: 5 },
  { name: 'PHP', level: 3 },
  { name: 'JavaScript', level: 4 },
  { name: 'TypeScript', level: 2 },
  { name: 'React', level: 2 },
  { name: 'Next.js', level: 2 },
  { name: 'Vue', level: 2 },
  { name: 'Nuxt.js', level: 1 },
  { name: 'Liquid', level: 3 },
  { name: 'Astro', level: 3 },
  { name: 'Node.js', level: 3 },
  { name: 'Express', level: 2 },
  { name: 'EJS', level: 3 },
];
const softSkills: Skills[] = [
  { name: 'Webpack', level: 3 },
  { name: 'Vite', level: 3 },
  { name: 'Vercel', level: 3 },
  { name: 'Firebase', level: 3 },
  { name: 'MongoDB', level: 2 },
  { name: 'MySQL', level: 1 },
  { name: 'Storybook', level: 1 },
];
const toolSkills: Skills[] = [
  { name: 'WordPress', level: 5 },
  { name: 'OWLet', level: 5 },
  { name: 'MicroCMS', level: 3 },
  { name: 'Shopify', level: 3 },
  { name: 'Figma', level: 3 },
  { name: 'XD', level: 3 },
  { name: 'Photoshop', level: 3 },
  { name: 'Illustrator', level: 2 },
  { name: 'After Effects', level: 1 },
  { name: 'Lightroom', level: 1 },
];
type Skill = {
  name: string;
  level: number;
};

type SkillListProps = {
  skills: Skill[];
  title: string;
};

function SkillCircle({ num }: { num: number }) {
  const getGradientStyle = (level: number) => {
    const gradientStart = 0;
    const gradientEnd = (level / 5) * 100;
    return {
      backgroundImage: `conic-gradient(#3667a0 ${gradientStart}% ${gradientEnd}%, #d2d2d2 ${gradientEnd}% 100%)`,
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
      <SkillList skills={toolSkills} title="Tool Skill" />
    </>
  );
}
