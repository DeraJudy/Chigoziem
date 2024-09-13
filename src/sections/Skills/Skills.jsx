import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Agile Methodologies and Tools" />
        <SkillList src={checkMarkIcon} skill="Data Analysis and Reporting" />
        <SkillList src={checkMarkIcon} skill="Cloud-Based Tools" />
        <SkillList src={checkMarkIcon} skill="Work Breakdown Structures (WBS)" />
        <SkillList src={checkMarkIcon} skill="Quality Assurance (QA) Tools" />
        <SkillList src={checkMarkIcon} skill="Scheduling Tools" />
        <SkillList src={checkMarkIcon} skill="Automation Tools" />
        <SkillList src={checkMarkIcon} skill="Project Management Software Proficiency" />
        <SkillList src={checkMarkIcon} skill="Budgeting and Financial Analysis" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Leadership" />
        <SkillList src={checkMarkIcon} skill="Time Management" />
        <SkillList src={checkMarkIcon} skill="Risk Management" />
        <SkillList src={checkMarkIcon} skill="Communication" />
        <SkillList src={checkMarkIcon} skill="Problem-Solving" />
        <SkillList src={checkMarkIcon} skill="Organizational Skills" />

      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Conflict Resolution" />
        <SkillList src={checkMarkIcon} skill="Emotional Intelligence" />
        <SkillList src={checkMarkIcon} skill=" Attention to Detail" />
        <SkillList src={checkMarkIcon} skill="Strategic Thinking" />
        <SkillList src={checkMarkIcon} skill="Team Building" />
      </div>
    </section>
  );
}

export default Skills;