import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/UseCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  if (currencyOptions.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading currencies...
      </div>
    );
  }

  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')`,
        }}
      >
        <h1 className="text-4xl font-bold text-center text-blue-700 backdrop-blur-sm bg-white/30 rounded-lg p-4 mb-8">
          Currency Converter
        </h1>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              {/* FROM */}
              <InputBox
                label=""
                amount={amount}
                currencyOptions={currencyOptions}
                selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
              />

              {/* SWAP */}
              <div className="relative w-full h-0.5 my-4">
                <button
                  type="button"
                  className="absolute  bottom-[-23px] left-1/2 -translate-x-1/2 -translate-y-1 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
                  onClick={swapCurrency}
                >
                  swap
                </button>
              </div>

              {/* TO */}
              <InputBox
                label=""
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisable
              />

              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
