const encodeBaju = (batasHargaJual, hargaJualIdeal, hargaTawar) => {
  const decode = (input) =>
    ((nilai) => (nilai !== -1 ? nilai : new Error("Invalid kode")))(
      "TEDUHASYIK".indexOf(input)
    );
  if (hargaTawar.toString().length < 3) {
    throw Error("Invalid harga tawar");
  }
  hargaTawar = parseInt(hargaTawar.toString().slice(0, -3));
  hargaJualIdeal = parseInt([...hargaJualIdeal].map((c) => decode(c)).join(""));
  batasHargaJual = parseInt([...batasHargaJual].map((c) => decode(c)).join(""));

  if (batasHargaJual >= hargaJualIdeal) {
    throw new Error("Batas harga jual harus kurang dari harga jual ideal");
  }
  if (hargaTawar > hargaJualIdeal) {
    throw new Error(
      "Harga yang ditawar tidak boleh lebih dari harga jual ideal"
    );
  }
  if (hargaTawar < batasHargaJual) {
    return "REJECT, belum balik modal nih!";
  }
  if (hargaTawar < hargaJualIdeal) {
    return "ACCEPT, terima kasih sudah berbelanja";
  }
  return "GOOD, customer terbaik gak pake nawar";
};
