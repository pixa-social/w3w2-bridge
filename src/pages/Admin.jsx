import styles from '../App.module.css'

export default function Admin() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>API Key Management</h2>
        <div className={styles.apiForm}>
          <div className={styles.formGroup}>
            <label>Xumm API Key</label>
            <input type="text" placeholder="Enter Xumm API Key" />
          </div>
          <div className={styles.formGroup}>
            <label>Stargazer API Key</label>
            <input type="text" placeholder="Enter Stargazer API Key" />
          </div>
          <div className={styles.formGroup}>
            <label>IPFS API Key</label>
            <input type="text" placeholder="Enter IPFS API Key" />
          </div>
          <div className={styles.formGroup}>
            <label>Pinata API Key</label>
            <input type="text" placeholder="Enter Pinata API Key" />
          </div>
          <div className={styles.formGroup}>
            <label>Filecoin API Key</label>
            <input type="text" placeholder="Enter Filecoin API Key" />
          </div>
          <div className={styles.formGroup}>
            <label>Google Drive API Key</label>
            <input type="text" placeholder="Enter Google Drive API Key" />
          </div>
          <button className={styles.saveButton}>Save API Keys</button>
        </div>
      </section>
    </div>
  )
}
