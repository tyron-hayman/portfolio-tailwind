import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ y: 300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}
    transition={{
        type: "spring",
        duration: 1
    }}
  >
    {children}
  </motion.div>
);
export default Layout;