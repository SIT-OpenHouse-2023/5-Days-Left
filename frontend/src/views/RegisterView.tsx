import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { useState } from "react";

export default function RegisterView() {
    const [age, setAge] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <p>กรอกข้อมูลเพื่อสมัครเข้าร่วมกิจกรรม</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    คำนำหน้า
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    // label="คำนำหน้า"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"นาย"}>นาย</MenuItem>
                    <MenuItem value={"นางสาว"}>นางสาว</MenuItem>
                    <MenuItem value={"นาง"}>นาง</MenuItem>
                    <MenuItem value={"เด็กชาย"}>เด็กชาย</MenuItem>
                    <MenuItem value={"เด็กหญิง"}>เด็กหญิง</MenuItem>
                </Select>
                <TextField
                    id="outlined-basic"
                    label="ชื่อจริง"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="นามสกุล"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="ชื่อสกุล"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="อายุ"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="โรงเรียน"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="จังหวัด"
                    variant="outlined"
                />
                {/* Submit button */}
                <Button variant="contained">Submit</Button>
            </FormControl>
        </div>
    );
}
