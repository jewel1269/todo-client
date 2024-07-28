"use client";
import { useForm } from "react-hook-form";
import AddForm from "../add-from/addFrom"; // Ensure path and filename are correct
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      status: "",
      StartDate: "",
      EndDate: "",
      email: localStorage.getItem("email"),
    },
  });

  const [user, setUser] = useState(null);
  const email = localStorage.getItem("email");
  const router = useRouter();

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:5000/user/${email}`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [email]);

  const onSubmit = async (data: any) => {
    if (!user) {
      router.push("/login");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/addTodo",
          data
        );
        console.log("Response data:", response.data);
        toast.success("Data added successfully");
        reset();
      } catch (error) {
        console.error("Error occurred:", error);
        toast.error("Failed to add data");
      }
    }
  };

  return (
    <div>
      <AddForm
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        ToastContainer={ToastContainer}
      />
    </div>
  );
};

export default AddTodo;
