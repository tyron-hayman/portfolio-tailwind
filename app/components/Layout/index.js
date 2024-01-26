import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ y: 1000, opacity: 1 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 1000, opacity: 1 }}
    transition={{
        type: "spring",
        duration: 1
    }}
  >
    {children}
  </motion.div>
);
export default Layout;