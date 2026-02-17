import { createContext, use, useContext } from "react";
import { useNavigate } from "react-router-dom";
import dummyUserData from "../data/dummyUserData.json";
import dummyChats from "../data/dummyChats.json";
import { useState, useEffect } from "react";

const AppContxt = createContext();

export const AppContextProvider = ({ children }) => {
    const naviage = useNavigate();

    const [user, setUser] = useState(null);
    const [chat, setChat] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


    const fetchUser = async () => {
        setUser(dummyUserData)
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const value = { naviage, user, setUser, chat, setChat, selectedChat, setSelectedChat, theme, setTheme };

    const fetchUserChats = async () => {
        setChat(dummyChats);
        setSelectedChat(dummyChats[0]);
    }


    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    useEffect(() => {
        if (user) {
            fetchUserChats();
        } else {
            setChat([]);
            setSelectedChat(null);
        };
    }, [user]);


    return (
        <AppContxt.Provider value={value}>
            {children}
        </AppContxt.Provider>
    )
};

export const useAppContext = () => useContext(AppContxt);