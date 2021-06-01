var x = 1;
out: for (y = 0; y < 1; y++) {
    document.write(y + "<br>");
    myinnerloop:
        do {
            x += 2;

            document.write(x + "<br>");
            if (x == 15) {
                break myinnerloop;
            }
        } while (x <= 12);
}
