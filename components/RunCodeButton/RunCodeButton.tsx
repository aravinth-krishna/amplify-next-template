import styles from "./RunCodeButton.module.css";

interface CodeExecutorProps {
  code: string;
  onOutput: () => void;
}

const RunCodeButton = ({ code, onOutput }: CodeExecutorProps) => {
  return (
    <button className={styles.runCodeButton} onClick={onOutput}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M1.5 1.49C1.5 1.2055 1.7385 1.001 2 1C2.0815 1 2.165 1.0195 2.2445 1.0625L14.2375 7.5725C14.4095 7.6655 14.5 7.8325 14.5 8C14.5 8.1675 14.4095 8.335 14.2375 8.428L2.245 14.938C2.16999 14.9793 2.08563 15.0007 2 15C1.7385 14.999 1.5 14.7945 1.5 14.51V1.49Z"
          fill="#00884F"
        />
      </svg>
      <span>Run</span>
    </button>
  );
};

export default RunCodeButton;
