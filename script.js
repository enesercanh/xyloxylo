// Obfuscated with https://obfuscator.io/
function handleCommand(e) {
  if (e.key === 'Enter') {
    const cmd = document.getElementById('command').value;
    const key = rot13('uryyb jbeyq'); // Decodes to "hello world"
    if (cmd.toLowerCase() === key) {
      window.location.href = '/puzzles/7g.html';
    } else {
      alert('ACCESS DENIED');
    }
  }
}

// ROT13 Decoder (hidden in cipher.js)
function rot13(str) {
  return str.replace(/[A-Za-z]/g, c => 
    String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
  );
}
