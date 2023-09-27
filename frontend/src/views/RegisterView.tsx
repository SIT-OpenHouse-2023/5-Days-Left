import InputField from "../components/InputField";
import Container from "../components/Container";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const validationSchema = yup.object({
    prefix: yup.string().required("โปรดเลือกคำนำหน้า"),
    firstname: yup.string().required("โปรดกรอกชื่อจริง"),
    lastname: yup.string().required("โปรดกรอกนามสกุล"),
    age: yup.number().required("โปรดกรอกอายุ"),
    school: yup.string().required("โปรดกรอกโรงเรียน"),
    province: yup.string().required("โปรดกรอกจังหวัด"),
    allergenicity: yup.string(),
});

export default function RegisterView() {
    const {
        formState: { errors, isValid, isSubmitting },
        setError,
        handleSubmit,
        register,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch(`/api/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prefix: data.prefix,
                firstname: data.firstname,
                lastname: data.lastname,
                age: data.age,
                school: data.school,
                province: data.province,
                allergenicity: data.allergenicity,
            }),
        });

        const { error } = await res.json();
        setError("prefix", { message: error });
        setError("firstname", { message: error });
        setError("lastname", { message: error });
        setError("age", { message: error });
        setError("school", { message: error });
        setError("province", { message: error });
        setError("allergenicity", { message: error });
    });

    return (
        <Container>
            <div className="">
                <form onSubmit={onSubmit}>
                    <div className="bg-[#D9D9D9] rounded-xl p-5">
                        <p className="text-center text-lg font-bold">
                            กรอกข้อมูลเพื่อสมัครเข้าร่วมกิจกรรม
                        </p>

                        <div className="grid gap-3">
                            <div className="flex gap-2 w-full">
                                <label className="flex flex-col gap-1">
                                    คำนำหน้า
                                    <select name="gender" id="gender">
                                        <option value="นาย">นาย</option>
                                        <option value="นางสาว">นางสาว</option>
                                        <option value="เด็กชาย">เด็กชาย</option>
                                        <option value="เด็กหญิง">
                                            เด็กหญิง
                                        </option>
                                    </select>
                                </label>
                                <InputField
                                    errorMessage={errors?.firstname?.message}
                                    label="ชื่อจริง"
                                    required
                                    name="first_name"
                                />
                                <InputField
                                    errorMessage={errors?.lastname?.message}
                                    label="นามสกุล"
                                    required
                                    name="lastname"
                                />
                            </div>
                            <InputField
                                errorMessage={errors?.age?.message}
                                label="อายุ"
                                name="firstname"
                                required
                                type="number"
                                min={0}
                            />
                            <InputField
                                errorMessage={errors?.school?.message}
                                label="โรงเรียน"
                                required
                                name="school"
                            />
                            <InputField
                                errorMessage={errors?.province?.message}
                                label="จังหวัด"
                                required
                                name="province"
                            />
                            <InputField
                                errorMessage={errors?.allergenicity?.message}
                                label="อาหารที่แพ้"
                                name="allergenicity"
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    name="accept"
                                    id="accept"
                                    className=""
                                />
                                ข้าพเจ้าได้อ่านและยอมรับข้อกำหนดและเงื่อนไขในการ
                                ...
                            </label>
                        </div>
                    </div>{" "}
                    <button
                        type="submit"
                        className="flex text-lg font-bold rounded-full bg-yellow-500 py-2 px-4 mt-5 m-auto"
                    >
                        ลงทะเบียน
                    </button>
                </form>
            </div>
        </Container>
    );
}
