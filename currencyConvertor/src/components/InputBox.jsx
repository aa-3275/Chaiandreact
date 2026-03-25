import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
  placeholder = "Amount",
}) {
  const id = useId();

  return (
    <div className="w-full flex gap-2 items-end">
      <div className="flex-1">
        <label htmlFor={id} className="block text-sm font-medium mb-2">
          {label}
        </label>

        <input
          id={id}
          type="number"
          className={`border p-2 rounded w-full ${className}`}
          placeholder={placeholder}
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>

      <select
        className={`border p-2 rounded ${className}`}
        value={selectCurrency}
        disabled={currencyDisable}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;
