const { Pool } = require('pg');

const pool = new Pool({
  user: 'tanner',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const params = process.argv.slice(2);
const cohort = params[0];

pool.query(`
SELECT distinct teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name like '%${cohort}%'
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack))
.finally(() => pool.end());

