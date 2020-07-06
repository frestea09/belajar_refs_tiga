import React from 'react'
class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // buat ref untuk menyimpan elemen DOM textInput
      this.textInput = React.createRef();    this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Fokuskan secara eksplisit pada input teks menggunakan API DOM dasar
      // Catatan: kita sedang mengakses "current" untuk mendapatkan simpul DOM
      this.textInput.current.focus();  }
  
    render() {
      // beri tahu React bahwa kita ingin mengasosiasikan *ref* <input>
      // dengan `textInput` yang kita buat dalam konstruktor
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />        <input
            type="button"
            value="Fokus pada masukan teks"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }
  export default CustomTextInput