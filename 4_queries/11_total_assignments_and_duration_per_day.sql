SELECT day, count(*) as number_of_assignments, sum(duration) as duration
from assignments
GROUP BY day
ORDER BY day;