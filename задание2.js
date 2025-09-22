function ipv4Parser(ip, mask) {
  let ipParts = ip.split('.').map(Number);
  let maskParts = mask.split('.').map(Number);
  let network = [];
  let host = [];

  for (let i = 0; i < 4; i++) {
    let net = ipParts[i] & maskParts[i];
    let hostPart = ipParts[i] & (~maskParts[i]) & 255;
    network.push(net);
    host.push(hostPart);
  }

  let networkStr = network.join('.');
  let hostStr = host.join('.');
  return [networkStr, hostStr];
}
