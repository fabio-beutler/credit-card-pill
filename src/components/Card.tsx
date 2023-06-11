import { SiVisa } from "react-icons/si";
import { LuNfc } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

interface CardProps {
  cardNumber?: string;
  ownerName?: string;
  expireDate?: string;
  cvv?: string;
  side: "front" | "back";
}

export function Card({
  cardNumber = "1234 1234 1234 1234",
  ownerName = "Seu nome aqui",
  expireDate = "• •/• •",
  cvv = "• • •",
  side,
}: CardProps) {
  return (
    <AnimatePresence initial={false} mode="wait">
      {side === "front" ? (
        <motion.div
          key={side}
          className={
            "flex h-40 w-72 flex-col gap-10 rounded-lg bg-credit-card bg-cover bg-center bg-no-repeat p-6"
          }
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -90 }}
          transition={{ ease: "linear", duration: 0.2 }}
        >
          <div className="flex justify-between">
            <span className="text-2xl">
              <SiVisa />
            </span>
            <span className="flex items-center justify-center rounded-full border p-1 text-sm">
              <LuNfc />
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-semibold tracking-[0.2em]">
                {cardNumber}
              </span>
            </div>
            <div className="flex gap-14 text-gray-400">
              <span>{ownerName}</span>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key={side}
          className={
            "relative flex h-40 w-72 flex-col gap-12 overflow-hidden rounded-lg bg-credit-card bg-cover bg-center bg-no-repeat py-6"
          }
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -90 }}
          transition={{ ease: "linear", duration: 0.2 }}
        >
          <div className="h-10 w-full bg-black" />
          <div className="absolute top-[4.5rem] h-6 w-3/4 bg-gray-500" />
          <div className="flex gap-20 px-6">
            <div className="flex items-center gap-2">
              <span>cvv</span>
              <span>{cvv}</span>
            </div>
            <div>
              <span>{expireDate}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
