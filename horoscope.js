const ay = 3;
const gun = 12;

if ((ay == 1 && 22 <= gun <= 31) || (ay == 2 && 1 <= gun <= 19)) {
    console.log("Kova Burcu");
} else if ((ay == 2 && 20 <= gun <= 29) || (ay == 3 && 1 <= gun <= 20)) {
    console.log("Balik Burcu");
} else if ((ay == 3 && 21 <= gun <= 31) || (ay == 4 && 1 <= gun <= 20)) {
    console.log("Koc Burcu");
} else if ((ay == 4 && 20 < gun < 31) || (ay == 5 && 0 < gun < 22)) {
    console.log("Boga Burcu");
} else if ((ay == 5 && 21 < gun < 32) || (ay == 6 && 0 < gun < 23)) {
    console.log("Ikizler Burcu")
} else if ((ay == 6 && 22 < gun < 31) || (ay == 7 && 0 < gun < 23)) {
    console.log("Yengec Burcu")
} else if ((ay == 7 && 22 < gun < 32) || (ay == 8 && 0 < gun < 23)) {
    console.log("Aslan Burcu")
} else if ((ay == 8 && 22 < gun < 32) || (ay == 9 && 0 < gun < 23)) {
    console.log("Basak Burcu")
} else if ((ay == 9 && 22 < gun < 31) || (ay == 10 && 0 < gun < 23)) {
    console.log("Terazi Burcu")
} else if ((ay == 10 && 22 < gun < 32) || (ay == 11 && 0 < gun < 22)) {
    console.log("Akrep Burcu")
} else if ((ay == 11 && 21 < gun < 31) || (ay == 12 && 0 < gun < 22)) {
    console.log("Yay Burcu")
} else if ((ay == 12 && 21 < gun < 32) || (ay == 1 && 0 < gun < 22)) {
    console.log("Oglak Burcu")
}