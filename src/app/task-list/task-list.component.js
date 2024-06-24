document.addEventListener('DOMContentLoaded', function () {
    const salesLogEntries = [
        { date: '12/03/2019', entity: 'PQR Private Limited', taskType: 'Meeting', time: '1:00 PM', contact: 'Sansa Stark', notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'Open' },
        { date: '12/03/2019', entity: 'STU Private Limited', taskType: 'Call', time: '1:00 PM', contact: 'Frodo Baggins', notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'Open' },
        // Add more entries as needed
    ];

    const tbody = document.getElementById('sales-log-entries');

    salesLogEntries.forEach(entry => {
        const tr = document.createElement('tr');
        
        Object.values(entry).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        
        const statusTd = tr.querySelector('td:last-child');
        statusTd.className = entry.status === 'Open' ? 'status-open' : 'status-closed';

        tbody.appendChild(tr);
    });
});