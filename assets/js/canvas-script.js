var crl = document.getElementById('myCrl').getContext('2d');
var crl1 = document.getElementById('myCrl1').getContext('2d');
var crl2 = document.getElementById('myCrl2').getContext('2d');

crl.beginPath();
crl.arc(60, 100, 40, 0, 2 * Math.PI);
crl.fillStyle = '#00ACC1';
crl.fill();
crl.linewidth = 5;
crl.strokeStyle = '#dbdbdb';
crl.stroke();

crl1.beginPath();
crl1.arc(60, 100, 40, 0, 2 * Math.PI);
crl1.fillStyle = '#6aa84f';
crl1.fill();
crl1.linewidth = 5;
crl1.strokeStyle = '#dbdbdb';
crl1.stroke();

crl2.beginPath();
crl2.arc(60, 100, 40, 0, 2 * Math.PI);
crl2.fillStyle = '#E91E63';
crl2.fill();
crl2.linewidth = 5;
crl2.strokeStyle = '#dbdbdb';
crl2.stroke();