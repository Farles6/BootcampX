SELECT count(assistance_requests.*) as total_assistances, students.name
from assistance_requests
JOIN students ON student_id = students.id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name;