import * as React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const volUnits = [{value: "ml", label: 'ml'},{value: "gms", label: 'gms'},];
const subCat = [{value: "SunScreen", label: 'SunScreen'},{value: "Face Wash", label: 'Face Wash'},{value: "Serum", label: 'Serum'},{value: "Moisturizer", label: 'Moisturizer'},];
const skinType = [{value: "Normal", label: 'Normal'},{value: "Sensitive", label: 'Sensitive'},{value: "Dry", label: 'Dry'},];


function App() {
  return (
    <div>
      <div class="header">
        <p>Create Your Product</p>
      </div>
      <div>
        <div class="txt"><TextField id="outlined-basic" label="Product Name*" variant="outlined" /></div>
        <div class="txt"><TextField id="outlined-basic" label="Description*" variant="outlined" /></div>
        <div class="txt"><TextField id="outlined-basic" label="Category Name*" variant="outlined" /></div>
        <div class="txt"><TextField id="outlined-basic" label="Base Price*" variant="outlined" /></div>
        <div class="txt"><Button variant="outlined">CHOOSE IMAGES</Button></div>
        <div class="txt"><TextField id="outlined-basic" label="Volume" variant="outlined" /></div>
        <div class="txt txt-menu"><TextField id="outlined-basic" select label="Volume Unit"
              >{volUnits.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>))}
             </TextField></div>
        <div class="txt txt-menu"><TextField id="outlined-basic" select label="Sub Category"
              >{subCat.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>))}
             </TextField></div>
        <div class="txt"><TextField id="outlined-basic" label="Ingredients" variant="outlined" /></div>
        <div class="txt txt-menu"><TextField id="outlined-basic" select label="Skin Type"
              >{skinType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>))}
             </TextField></div>
        <div class="txt"><TextField id="outlined-basic" label="Preferences" variant="outlined" /></div>
        <div class="txt"><TextField id="outlined-basic" label="Tags" variant="outlined" /></div>
        <div class="txt">
          <Button variant="contained">CANCEL</Button>
          <Button variant="contained">CREATE</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
