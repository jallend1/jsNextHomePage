import styles from '../styles/CodeBlock.module.css';

const CodeBlock = () => {
  return (
    <div className={styles.codeblock}>
      <div>
        <span className={styles.declarations}>const</span>
        <span className={styles.variables}> jasonAllen </span>
        <span className={styles.delimiter}> = </span>
        <span className={styles.declarations}>{'{'}</span>
      </div>
      <div className={styles.codeline}>
        <span className={styles.properties}>pronouns</span>
        <span className={styles.delimiter}>: </span>
        <span className={styles.values}>&quot;he&quot;</span>
        <span className={styles.declarations}> || </span>
        <span className={styles.values}>&quot;him&quot;</span>
        <span className={styles.delimiter}>, </span>
      </div>
      <div className={styles.codeline}>
        <span className={styles.properties}>location</span>
        <span className={styles.delimiter}>: </span>
        <span className={styles.values}>&quot;Seattle, WA&quot;</span>
        <span className={styles.delimiter}>, </span>
      </div>
      <div className={styles.codeline}>
        <span className={styles.properties}>coding</span>
        <span className={styles.delimiter}>: </span>
        <span className={styles.variables}>[</span>
        <span className={styles.values}>&quot;JavaScript&quot;</span>
        <span className={styles.delimiter}>, </span>
        <span className={styles.values}>&quot;React&quot;</span>
        <span className={styles.delimiter}>, </span>
        <span className={styles.values}>&quot;Next.js&quot;</span>
        <span className={styles.delimiter}>, </span>
        <span className={styles.values}>&quot;Node.js&quot;</span>
        <span className={styles.delimiter}>, </span>
        <span className={styles.values}>&quot;CSS&quot;</span>
        <span className={styles.delimiter}>, </span>
        <span className={styles.values}>&quot;HTML&quot;</span>
        <span className={styles.variables}>]</span>
        <span className={styles.delimiter}>, </span>
      </div>
      <div className={styles.codeline}>
        <span className={styles.properties}>tools</span>
        <span className={styles.delimiter}>: </span>
        <span className={styles.variables}>[</span>
        <span className={styles.values}>&quot;Git&quot;</span>
        <span className={styles.delimiter}>, </span>
        <span className={styles.values}>&quot;Firebase&quot;</span>
        <span className={styles.delimiter}>, </span>
        <span className={styles.values}>&quot;Figma&quot;</span>
        <span className={styles.delimiter}>, </span>
        <span className={styles.values}>&quot;Netlify&quot;</span>
        <span className={styles.delimiter}>, </span>
        <span className={styles.values}>&quot;VSCode&quot;</span>
        <span className={styles.variables}>]</span>
        <span className={styles.delimiter}>, </span>
      </div>
      <div className={styles.codeline}>
        <span className={styles.properties}>social</span>
        <span className={styles.delimiter}>: </span>
        <span className={styles.variables}>[</span>
        <div className={styles.codeline}>
          <span className={styles.declarations}>{'{'}</span>
          <span className={styles.properties}>link</span>
          <span className={styles.delimiter}>: </span>
          <span className={styles.values}>&quot;LinkedIn&quot;</span>
          {/* <span className={styles.delimiter}>, </span>
          <span className={styles.properties}>link</span>
          <span className={styles.delimiter}>: </span>
          <span className={styles.values}>&quot;jallend1&quot;</span> */}
          <span className={styles.declarations}>{'}'}</span>
          <span className={styles.delimiter}>, </span>
        </div>
        <div className={styles.codeline}>
          <span className={styles.declarations}>{'{'}</span>
          <span className={styles.properties}>link</span>
          <span className={styles.delimiter}>: </span>
          <span className={styles.values}>&quot;Twitter&quot;</span>
          {/* <span className={styles.delimiter}>, </span>
          <span className={styles.properties}>link</span>
          <span className={styles.delimiter}>: </span>
          <span className={styles.values}>&quot;jallend1&quot;</span> */}
          <span className={styles.declarations}>{'}'}</span>
          <span className={styles.delimiter}>, </span>
        </div>
        <div className={styles.codeline}>
          <span className={styles.declarations}>{'{'}</span>
          <span className={styles.properties}>link</span>
          <span className={styles.delimiter}>: </span>
          <span className={styles.values}>&quot;GitHub&quot;</span>
          {/* <span className={styles.delimiter}>, </span>
          <span className={styles.properties}>link</span>
          <span className={styles.delimiter}>: </span>
          <span className={styles.values}>&quot;jallend1&quot;</span> */}
          <span className={styles.declarations}>{'}'}</span>
          <span className={styles.variables}>]</span>
        </div>
      </div>
      <div>
        <span className={styles.declarations}>{'}'}</span>
      </div>
    </div>
  );
};

export default CodeBlock;
