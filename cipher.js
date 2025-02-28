// Base64 Decoder
function decodeBase64(str) {
  return atob(str);
}

// Caesar Cipher (Shift +7)
function caesarDecrypt(str, shift = 7) {
  return str.replace(/[A-Za-z]/g, c => 
    String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + shift) ? c : c - 26)
  );
}
