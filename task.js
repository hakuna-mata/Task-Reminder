document.getElementById('setReminder').addEventListener('click', function() {
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;
  
    if (time === '') {
      alert('Please select a time for the reminder.');
      return;
    }
  
    const reminder = {
      day,
      time,
      activity,
    };
  
    addReminderToList(reminder);
    setReminder(reminder);
  });
  
  function addReminderToList(reminder) {
    const reminderList = document.getElementById('reminderList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${reminder.day} - ${reminder.time} - ${reminder.activity}</span>
      <button class="delete-reminder">Delete</button>
    `;
  
    listItem.querySelector('.delete-reminder').addEventListener('click', function() {
      listItem.remove();
    });
  
    reminderList.appendChild(listItem);
  }
  
  function setReminder(reminder) {
    const now = new Date();
    const reminderTime = new Date();
  
    reminderTime.setHours(reminder.time.split(':')[0]);
    reminderTime.setMinutes(reminder.time.split(':')[1]);
    reminderTime.setSeconds(0);
  
    const timeDifference = reminderTime.getTime() - now.getTime();
  
    if (timeDifference > 0) {
      setTimeout(function() {
        playChime();
        alert(`Reminder: ${reminder.activity}`);
      }, timeDifference);
    } else {
      alert('The selected time is in the past. Please select a future time.');
    }
  }
  
  function playChime() {
    const chime = document.getElementById('chime');
    chime.play();
  }
  