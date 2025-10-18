const express = require('express');
const app = express();

app.use(express.json());

app.post('/send-command', (req, res) => {
  const command = req.body.command;
  
  // Here, you would connect to your proxy program and send the command
  // For example, via a socket or other method.
  
  console.log('Received command:', command);
  
  // Simulate sending the command and getting a response
  res.json({ message: 'Command sent: ' + command });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
