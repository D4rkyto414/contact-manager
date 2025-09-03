import { initialContacts } from "./data/contacts";

useEffect(() => {
  const localData = localStorage.getItem("contacts");
  if (localData) {
    setContacts(JSON.parse(localData));
  } else {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        const mappedContacts = data.users.map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          phone: user.phone || "N/A",
          category: "work",
          favorite: false,
        }));
        setContacts(mappedContacts);
        localStorage.setItem("contacts", JSON.stringify(mappedContacts));
      } catch (error) {
        console.error("Error al cargar la API, usando mock data", error);
        setContacts(initialContacts); // 👈 Fallback
      }
    };
    fetchContacts();
  }
}, []);

