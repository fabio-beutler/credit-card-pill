import { FormEvent, useState } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Card } from "./components/Card";
import { IMaskInput } from "react-imask";

function App() {
  const [showSideOfTheCard, setShowSideOfTheCard] = useState<"front" | "back">(
    "front"
  );

  const [cardNumber, setCardNumber] = useState<string>();
  const [ownerName, setOwnerName] = useState<string>();
  const [expireDate, setExpireDate] = useState<string>();
  const [cvv, setCvv] = useState<string>();

  function toggleSideOfTheCard(side: "front" | "back") {
    setShowSideOfTheCard(side);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-gray-200 ">
      <form onSubmit={handleSubmit}>
        <div className="flex min-h-screen flex-col justify-center gap-11 rounded-lg bg-gray-800 p-6 sm:min-h-0 lg:p-8">
          <div className="grid justify-items-center gap-12 md:grid-cols-2 md:grid-rows-3 md:gap-4">
            <div className="md:col-start-2 md:row-start-1 md:row-end-3">
              <Card
                side={showSideOfTheCard}
                cardNumber={cardNumber}
                ownerName={ownerName}
                expireDate={expireDate}
                cvv={cvv}
              />
            </div>
            <div className="flex flex-col gap-6 md:col-start-1 md:row-start-1 md:row-end-4">
              <div className="flex flex-col gap-0.5">
                <label className="text-sm font-semibold" htmlFor="cardNumber">
                  Número de cartão
                </label>
                <IMaskInput
                  className="rounded bg-gray-900 p-3 text-gray-100 focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-purple-500"
                  type="text"
                  id="cardNumber"
                  name="card-number"
                  onFocus={() => toggleSideOfTheCard("front")}
                  value={cardNumber}
                  onAccept={(value) =>
                    setCardNumber((value as string) || undefined)
                  }
                  mask={"0000 0000 0000 0000"}
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="text-sm font-semibold" htmlFor="ownerName">
                  Nome do titular
                </label>
                <input
                  className="rounded bg-gray-900 p-3 text-gray-100 placeholder:text-gray-400
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  type="text"
                  id="ownerName"
                  name="owner-name"
                  placeholder="Nome como está no cartão"
                  onFocus={() => toggleSideOfTheCard("front")}
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value.toUpperCase())}
                />
              </div>
              <div className="flex gap-4">
                <div className="flex basis-2/3 flex-col gap-0.5">
                  <label className="text-sm font-semibold" htmlFor="expireDate">
                    Validade
                  </label>
                  <IMaskInput
                    className="w-full rounded bg-gray-900 p-3 text-gray-100 placeholder:text-gray-400
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                    type="text"
                    id="expireDate"
                    name="expire-date"
                    placeholder="mm/aa"
                    onFocus={() => toggleSideOfTheCard("back")}
                    value={expireDate}
                    onAccept={(value) => setExpireDate(value as string)}
                    mask={"00/00"}
                  />
                </div>
                <div className="flex basis-1/3 flex-col gap-0.5">
                  <label
                    className="flex items-center gap-1 text-sm font-semibold"
                    htmlFor="securityCode"
                    title="Código de segurança"
                  >
                    CVV
                    <AiFillQuestionCircle />
                  </label>
                  <IMaskInput
                    className="w-full rounded bg-gray-900 p-3 text-gray-100 placeholder:text-gray-400
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                    type="text"
                    id="securityCode"
                    name="security-code"
                    placeholder="* * *"
                    onFocus={() => toggleSideOfTheCard("back")}
                    value={cvv}
                    onAccept={(value) => setCvv(value as string)}
                    mask={"000"}
                  />
                </div>
              </div>
            </div>
            <p className="flex items-center gap-2 self-start text-center md:col-start-2 md:row-start-3">
              <span className="text-green-300">
                <BsShieldFillCheck />
              </span>
              Seus dados estão seguros
            </p>
          </div>
          <button
            type="submit"
            className="rounded bg-purple-600 p-4 text-lg font-semibold transition hover:bg-purple-700"
          >
            Adicionar Cartão
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
