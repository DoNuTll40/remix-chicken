/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

// สร้าง context
const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // ตั้งค่าเริ่มต้นเป็น "light" เพื่อป้องกันการแสดงผลที่ผิด
  const [theme, setTheme] = useState(null);
  const [updateHeader, setUpdateHeader] = useState(false);

  // ตรวจสอบ theme เมื่อโหลดหน้า
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ตรวจสอบว่าเป็น client-side หรือไม่
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme) {
        // ถ้ามีการตั้งค่า theme ใน localStorage ให้ใช้ค่าดังกล่าว
        setTheme(storedTheme);
      } else {
        // หากไม่มีการตั้งค่า theme ให้ตรวจสอบค่าที่ตั้งจากระบบ
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    }
  }, []); // จะรันแค่ครั้งเดียวเมื่อ component โหลดเสร็จ

  // เมื่อมีการเปลี่ยน theme ให้ตั้งค่าที่ document และเก็บใน localStorage
  useEffect(() => {
    if (theme && typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme); // บันทึกธีมใหม่ลงใน localStorage
    }
  }, [theme]); // รันทุกครั้งเมื่อ theme เปลี่ยน

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, updateHeader, setUpdateHeader }}>
      {children}
    </ThemeContext.Provider>
  );
};

// hook สำหรับใช้ในส่วนต่าง ๆ ของแอป
export const useTheme = () => useContext(ThemeContext);