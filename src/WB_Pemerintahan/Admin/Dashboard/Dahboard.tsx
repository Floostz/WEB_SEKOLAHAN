// Dashboard.tsx
import styles from './Dashboard.module.css';
import Sidebar from '../Sidebar/sidebaradmin';
import Navbar from '../Navbar/navbaradmin';
import GenderChart from './chartkecil/chartgender'; // Adjust the path if necessary
import ReligionChart from './chartkecil/chartreligius';
import ChartUmur from './chartkecil/chartumur';
import ChartPekerjan from './chartbesar/datapekerjaan';
import ChartPendidkan from './chartbesar/datapendidikan'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div class={styles.dashboard}>
                <h1 class={styles.title}>Dashboard</h1>

                <div class={styles.gridchart1}>
                    <div class={styles.grid}>Jumlah Kematian</div>
                    <div class={styles.grid}>Jumlah Kelahiran</div>
                    <div class={styles.grid}>Total Penduduk</div>
                </div>

                <div class={styles.gridchart2}>
                    <div class={styles.gridatas}>
                 
                      <ChartPekerjan/>
                        </div>
                    <div class={styles.gridatas}>

                        <ChartPendidkan/>
                    </div>
                </div>

                <div class={styles.gridchart3}>
                    <div class={styles.gridbawah}>
                        Data Gender
                        <GenderChart />
                    </div>
                    <div class={styles.gridbawah}>
                        Data Umur
                        <ChartUmur />
                    </div>
                    <div class={styles.gridbawah}>
                       Data Agama
                        <ReligionChart />
                    </div>
                </div>

                <div class={styles.gridchart4}>
                    <div class={styles.gridbesar}>Grid besar</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
