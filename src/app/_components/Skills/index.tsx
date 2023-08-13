const softSkills = [
  { name: 'HTML/SCSS', level: 5 },
  { name: 'JavaScript', level: 3 },
  { name: 'TypeScript', level: 2 },
  { name: 'React', level: 2 },
  { name: 'Next.js', level: 2 },
  { name: 'Vue', level: 2 },
  { name: 'Nuxt.js', level: 1 },
  { name: 'Tailwind CSS', level: 2 },
  { name: 'Storybook', level: 2 },
  { name: 'Webpack', level: 2 },
  { name: 'Firebase', level: 2 },
  { name: 'Node.js', level: 2 },
  { name: 'Express', level: 2 },
  { name: 'MongoDB', level: 2 },
  { name: 'MySQL', level: 2 },
];
const hardSkills = [
  {name:'Photoshop', lebel:2},
  {name:'Illustrator', lebel:2},
  {name:'Figma', lebel:2},
  {name:'Adobe XD', lebel:2},
  {name:'Premiere Pro', lebel:2},
  {name:'After Effects', lebel:2},
  {name:'Lightroom', lebel:2},
];

export default function Skills() {
  return (
    <div className="skills">
      {softSkills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill__name">{skill.name}</div>
          <div className="skill__level">{skill.level}</div>
        </div>
      ))}
    </div>
  );
}
