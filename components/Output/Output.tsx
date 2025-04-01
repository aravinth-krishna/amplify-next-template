import styles from "./Output.module.css";

interface OutputProps {
  output: string;
}

const Output = ({ output }: OutputProps) => {
  return (
    <div className={styles.output}>
      <pre>{output}</pre>
    </div>
  );
};

export default Output;
