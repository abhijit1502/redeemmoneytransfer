import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiConfig from "./ApiConfig";

function Calculator() {
  const [countries, setCountries] = useState([]);
  // Initialize selectedCountry as empty. It will be set from the API call.
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedBranchId, setSelectedBranchId] = useState("2");
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState("100.00");
  const [rate, setRate] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");
  const [staticCurrencyCode, setstaticCurrencyCode] = useState("");
  const [fees, setFees] = useState("00");
  const [calculatedAmount, setCalculatedAmount] = useState("");
  const [collectionTypes, setCollectionTypes] = useState([]);
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [selectedCollectionType, setSelectedCollectionType] = useState("");
  const [selectedCollectionTypeName, setSelectedCollectionTypeName] =
    useState("");
  const [selectedPaymentType, setSelectedPaymentType] = useState("");
  const [payementtypeId, setpaymenttypeId] = useState("");
  const [countryId, setcountryId] = useState("");
  const [deliveryTypes, setDeliveryTypes] = useState([]);
  const [BasecurrencyData, setBasecurencydata] = useState([]);
  const [BasecurrencyId, setbasecurrencyId] = useState("");
  const [baseCurrencyData, setBaseCurrencyData] = useState([]);
  const [baseCurrencyId1, setBaseCurrencyId1] = useState("");
  const [selectedDeliveryType, setSelectedDeliveryType] = useState("");
  const [selectBasecountryId, setselectBasecountryId] = useState("");
  const [youSendInput, setyouSendInput] = useState(false);
  const [RecipentGetInput, setRecipentGetInput] = useState(false);
  const [userEnteredAmount, setUserEnteredAmount] = useState(amount);
  const [minimumFractionDigits, setMinimumFractionDigits] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = "../ApiConfig.js";
  const location = useLocation();
  const amountTimeoutRef = useRef(null);
  // const baseCountryFlags = {
  //   1: 'assets/img/flags/gbp.png',
  //   6: 'assets/img/flags/eur.png',
  // };
  const [baseCountryFlag, setBaseCountryFlag] = useState("");
  const [baseCurrencyCode, setBaseCurrencyCode] = useState("");
  const [foreignCurrencyCode, setForeignCurrencyCode] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  useEffect(() => {
    const pathParts = location.pathname.split("_");
    if (pathParts.length > 1) {
      const countryFromURL = pathParts[1];
      const matchedCountry = countries.find(
        (country) =>
          country.countryName.toLowerCase() === countryFromURL.toLowerCase()
      );
      if (matchedCountry) {
        setSelectedCountry(matchedCountry.countryID.toString());
        setSelectedCountryDetails(matchedCountry);
        setCurrencyCode(matchedCountry.countryCurrency);
      }
    }
  }, [location.pathname, countries]);

  const handleDeliveryTypeChange = (event) => {
    event.preventDefault();
    const selectedDeliveryType = event.target.value;
    setSelectedDeliveryType(selectedDeliveryType);
  };

  const handleCollectionTypeChange = (event) => {
    event.preventDefault();
    const selectedCollectionType = event.target.value;
    setSelectedCollectionType(selectedCollectionType);
  };

  const handlePayementTypeChange = (event) => {
    event.preventDefault();
    const selectedPaymentType = event.target.value;
    setpaymenttypeId(selectedPaymentType);
  };

  const handleCountryChange = (event) => {
    const newCountryId = event.target.value;
    setSelectedCountry(newCountryId);
    const newCountryDetails = countries.find(
      (country) => country.countryID.toString() === newCountryId
    );
    setSelectedCountryDetails(newCountryDetails);
    if (newCountryDetails) {
      setCurrencyCode(newCountryDetails.countryCurrency);
    }
  };
  const handleCalculatedAmountChange = (event) => {
    event.preventDefault();
    let newCalculatedAmount = event.target.value;
    setRecipentGetInput(true);
    // Remove any non-numeric characters from the input
    newCalculatedAmount = newCalculatedAmount.replace(/[^0-9.]/g, "");

    // Ensure the input does not exceed 7 digits
    if (newCalculatedAmount.length > 12) {
      newCalculatedAmount = newCalculatedAmount.slice(0, 0);
    }

    // Update the state with the cleaned amount
    setCalculatedAmount(newCalculatedAmount);
    setUserEnteredAmount(newCalculatedAmount / rate || "");
    setAmount(newCalculatedAmount / rate || "");
  };

  const handleAmountChange = (event) => {
    event.preventDefault();
    const newAmount = event.target.value;
    setyouSendInput(true);

    // Remove leading zeros
    let cleanedAmount = newAmount.replace(/^0+/, "");

    // Allow typing with .00 or without it
    if (cleanedAmount.endsWith(".00")) {
      cleanedAmount = cleanedAmount.slice(0, -3); // Remove the .00 for valid input
    }

    // Check if the cleaned amount is a valid number
    if (!isNaN(cleanedAmount)) {
      // Limit the input to 12 digits
      if (cleanedAmount.length <= 12) {
        setAmount(cleanedAmount);
        setUserEnteredAmount(cleanedAmount);
      } else {
        // Allow input after 12 digits
        setAmount(cleanedAmount.substring(0, 12)); // Limit to 12 digits
        setUserEnteredAmount(cleanedAmount.substring(0, 12));
      }
    } else {
      // Handle non-numeric input
      setAmount("0");
      setUserEnteredAmount("0");
      // setRate('0');
      // setFees('0');
      setCalculatedAmount("0");
    }
  };
  const handleAmountBlur = (event) => {
    let value = event.target.value;

    // Remove any non-numeric characters (except for decimal points)
    value = value.replace(/[^0-9.]/g, "");

    // Check if the value is a valid number
    if (!isNaN(value) && value !== "") {
      // Convert to float
      const numericValue = parseFloat(value);

      // Only format if the value is greater than 0
      if (numericValue > 0) {
        const formattedValue = numericValue.toFixed(2);
        setAmount(formattedValue); // Update the state
        setUserEnteredAmount(formattedValue); // Update user entered amount
        event.target.value = formattedValue; // Ensure input reflects formatted value
      } else {
        // If the value is 0 or empty, reset to an empty string
        setAmount("0");
        setUserEnteredAmount("0");
        event.target.value = "0";
      }
    } else {
      // If not a valid number, reset to an empty string
      setAmount("0");
      setUserEnteredAmount("0");
      event.target.value = "0";
    }
  };

  const handleInputFocusOut = () => {
    setMinimumFractionDigits(2);
  };

  const handleInputFocus = () => {
    // Set minimumFractionDigits to 0 when focus is in
    setMinimumFractionDigits(0);
  };

  const handleContinue = (event) => {
    event.preventDefault();
    if (!selectedCollectionType || !selectedDeliveryType || !amount) {
      toast.error("Please Fill All The Details.");
      return;
    }
    toast.success("Amount Calculated Successfully!");
    // Open the link in a new tab
    window.open("https://redeemtransfer.net/app/", "_blank");
  };

  // Fetch countries on component mount
  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/checkrateslistcountry/basecurrencylist`, {
        clientID: "1",
        branchID: selectedBranchId,
      })
      .then((response) => {
        if (response?.data?.response && response?.data?.data) {
          setBaseCurrencyData(response.data.data);
          const defaultCollectionType = response?.data?.data[0];
          if (defaultCollectionType) {
            setbasecurrencyId(defaultCollectionType?.baseCurrencyID.toString());
            setBaseCurrencyCode(defaultCollectionType?.countryCurrency);
          }
        }
      })
      .catch((error) => console.error("Error fetching payment types:", error));
  }, [selectedBranchId]);

  const handleBasecountryIdChange = (event) => {
    const selectedId = event.target.value;
    const selectedCurrency = baseCurrencyData.find(
      (item) => item.baseCurrencyID.toString() === selectedId
    );

    if (selectedCurrency) {
      setBaseCurrencyId1(selectedId); // Update selected baseCurrencyID
      setBaseCurrencyCode(selectedCurrency.countryCurrency); // Update the displayed currency code
    }
  };

  useEffect(() => {
    if (selectedCountry && selectedBranchId) {
      axios
        .post(`${ApiConfig.baseUrl}/currency/currencylist`, {
          countryID: selectedCountry,
          clientID: "1",
        })
        .then((response) => {
          if (response.data.response && response.data.data) {
            setCurrencyList(response.data.data);
            const firstCurrency = response.data.data[0];
            if (firstCurrency) {
              setCurrencyCode(firstCurrency.currencyCode);
              setSelectedCurrency(firstCurrency); // Set initial flag
              setForeignCurrencyCode(firstCurrency?.currencyID.toString());
              setstaticCurrencyCode(firstCurrency.currencyCode);
            }
          }
        })
        .catch((error) =>
          console.error("Error fetching currency list:", error)
        );
    }
  }, [selectedCountry, selectedBranchId]);

  const handleCurrencyChange = (e) => {
    const selectedCode = e.target.value;
    setCurrencyCode(selectedCode);

    // Find the selected currency from the list
    const selectedCurrency = currencyList.find(
      (currency) => currency.currencyCode === selectedCode
    );

    if (selectedCurrency) {
      setSelectedCurrency(selectedCurrency);
      setForeignCurrencyCode(selectedCurrency.currencyID.toString()); // Update currencyID dynamically
    }
  };

  // This useEffect fetches the country list, sorts it, and sets the default selection.
  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/checkrateslistcountry/checklistcountry`, {
        clientID: "1",
      })
      .then((response) => {
        if (
          response.data.response &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          // Sort the fetched countries alphabetically by countryName
          const sortedCountries = response.data.data.sort((a, b) =>
            a.countryName.localeCompare(b.countryName)
          );

          setCountries(sortedCountries);

          // If selectedCountry is not yet set, default to the first country from the sorted list.
          if (!selectedCountry) {
            const firstCountry = sortedCountries[0];
            setSelectedCountry(firstCountry.countryID.toString());
            setSelectedCountryDetails(firstCountry);
          } else {
            // Otherwise, find and set the details for the currently selected country.
            const currentCountryDetails = sortedCountries.find(
              (country) => country.countryID === parseInt(selectedCountry, 10)
            );
            setSelectedCountryDetails(currentCountryDetails);
          }
        }
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, [selectedCountry]);

  useEffect(() => {
    if (!selectedCountry) return; // Don't fetch if no country is selected
    axios
      .post(`${ApiConfig.baseUrl}/collection/getcollectiontype`, {
        clientID: "1",
        branchID: selectedBranchId,
        countryID: selectedCountry,
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setCollectionTypes(response.data.data);
          const defaultCollectionType = response.data.data[0];
          if (defaultCollectionType) {
            setSelectedCollectionType(
              defaultCollectionType.paymentCollectionTypeID.toString()
            );
            setSelectedCollectionTypeName(defaultCollectionType.typeName);
          }
        }
      })
      .catch((error) =>
        console.error("Error fetching collection types:", error)
      );
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    if (!selectedCountry) return; // Don't fetch if no country is selected
    axios
      .post(`${ApiConfig.baseUrl}/deliverytype/getdeliverytype`, {
        clientID: "1",
        branchID: selectedBranchId,
        countryID: selectedCountry,
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setDeliveryTypes(response.data.data);
          const defaultDeliveryType = response.data.data[0];
          if (defaultDeliveryType) {
            setSelectedDeliveryType(
              defaultDeliveryType.deliveryTypeID.toString()
            );
          }
        }
      })
      .catch((error) => console.error("Error fetching delivery types:", error));
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/paymenttype/getpaytypes`, {
        clientID: "1",
        branchID: selectedBranchId,
        customerID: "",
        baseCountryID: baseCurrencyId1 || BasecurrencyId || "1",
        isApp: "0",
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setPaymentTypes(response.data.data);
          const defaultCollectionType = response.data.data[0];
          if (defaultCollectionType) {
            setpaymenttypeId(defaultCollectionType.payTypeID.toString());
            setSelectedPaymentType(defaultCollectionType.payType);
          }
        }
      })
      .catch((error) => console.error("Error fetching payment types:", error));
  }, [selectedBranchId, countryId, baseCurrencyId1]);

  useEffect(() => {
    if (amount && selectedCountry && currencyCode) {
      if (amountTimeoutRef.current) {
        clearTimeout(amountTimeoutRef.current);
      }
      setIsLoading(true);
      amountTimeoutRef.current = setTimeout(() => {
        axios
          .post(
            `${ApiConfig.baseUrl}/checkrateslistcountry/checkrateslistcountry`,
            {
              clientID: "1",
              countryID: selectedCountry,
              paymentTypeID: payementtypeId,
              paymentDepositTypeID: selectedCollectionType,
              deliveryTypeID: selectedDeliveryType,
              transferAmount: amount,
              currencyCode: currencyCode,
              branchID: selectedBranchId,
              BaseCurrencyID: baseCurrencyId1 || BasecurrencyId,
              baseCurrencyCode: baseCurrencyCode,
              foreignCurrencyCode: foreignCurrencyCode,
            }
          )
          .then((response) => {
            if (
              response.data.response &&
              response.data.data &&
              response.data.data.length > 0
            ) {
              let foundRate = false;
              response.data.data.forEach((rateData) => {
                const rateValue = rateData.rate;
                const minAmount = rateData.minAmount;
                const maxAmount = rateData.maxAmount;
                if (
                  rateValue !== 0 &&
                  amount >= minAmount &&
                  amount <= maxAmount
                ) {
                  setRate(rateValue);
                  setFees(rateData.transferFeesGBP);
                  setCalculatedAmount((amount * rateValue).toFixed(2) || "");
                  foundRate = true;
                }
              });
              if (!foundRate) {
                toast.error(
                  "Rates And Fees Are Not Available For This Country"
                );
                setRate("0");
                setAmount("0");
                setCalculatedAmount("0");
                setRecipentGetInput(false);
              }
            } else {
              toast.error("Rates And Fees Are Not Available For This Country");
              setRate("0");
              setAmount("0");
              setCalculatedAmount("0");
              setyouSendInput(false);
              setUserEnteredAmount("0");
            }
          })
          .catch((error) =>
            console.error("Error fetching rates and fees:", error)
          )
          .finally(() => setIsLoading(false));
      }, 1000);
    }
  }, [
    amount,
    selectedCountry,
    currencyCode,
    selectedCollectionType,
    baseCurrencyCode,
    baseCurrencyId1,
    BasecurrencyId,
    foreignCurrencyCode,
    payementtypeId,
    selectedDeliveryType,
    selectedBranchId,
    selectBasecountryId,
  ]);

  return (
    <>
      <div className="calcss calcssmr">
        <div className="service-charge-wrap">
          <form className="charge-form">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="send_money">You Send</label>
                  <input
                    type="text"
                    id="Number1"
                    name="send_money"
                    value={amount === "" ? "" : amount}
                    onChange={handleAmountChange}
                    onBlur={handleAmountBlur}
                    disabled={rate === 0 ? true : false}
                    maxLength={12}
                    placeholder="0.00"
                  />
                  <div className="currency-selector">
                    {/* Display selected flag with fallback */}
                    <img
                      className="flagicon baseflag mt-0"
                      src={
                        baseCurrencyData.find(
                          (currency) =>
                            currency.baseCurrencyID.toString() ===
                            baseCurrencyId1
                        )?.countryFlag || "images/flags/gbp.png" // Hardcoded fallback image path
                      }
                      alt="Selected Country Flag"
                      style={{ verticalAlign: "middle" }}
                    />

                    {/* Dropdown for currency selection */}
                    <select
                      className="inputgbp"
                      value={baseCurrencyId1}
                      onChange={handleBasecountryIdChange}
                    >
                      {baseCurrencyData.map((currency) => (
                        <option
                          key={currency.baseCurrencyID}
                          value={currency.baseCurrencyID}
                        >
                          {`${currency.countryCurrency}`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <select
                label="Collection Type "
                value={selectedCollectionType}
                onChange={handleCollectionTypeChange}
                className="select-delivery d-none"
              >
                {Array.isArray(collectionTypes) &&
                  collectionTypes.map((collectionType) => (
                    <option
                      key={collectionType.paymentCollectionTypeID}
                      value={collectionType.paymentCollectionTypeID}
                    >
                      {collectionType.typeName}
                    </option>
                  ))}
              </select>
              <select
                label="Payment Type"
                value={payementtypeId}
                onChange={handlePayementTypeChange}
                className="select-delivery d-none"
              >
                {paymentTypes.map((paymentTypes) => (
                  <option
                    key={paymentTypes.paymentCollectionTypeID}
                    value={paymentTypes.payTypeID}
                  >
                    {paymentTypes?.payType}
                  </option>
                ))}
              </select>
              <select
                label="Delevery Type "
                value={selectedDeliveryType}
                onChange={handleDeliveryTypeChange}
                className="select-delivery d-none"
              >
                {deliveryTypes.map((deliveryTypes) => (
                  <option
                    key={deliveryTypes.deliveryTypeID}
                    value={deliveryTypes.deliveryTypeID}
                  >
                    {deliveryTypes?.deliveryType}
                  </option>
                ))}
              </select>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="send_money">They Receive</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Number2"
                    name="received_money"
                    value={calculatedAmount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} // Comma-separated format
                    onChange={handleCalculatedAmountChange}
                    onBlur={handleInputFocusOut}
                    onFocus={handleInputFocus}
                    disabled={rate === 0 ? true : false}
                    maxLength={12} // Limiting input to 12 characters
                    placeholder="0.00"
                  />
                  <img
                    className="flagicon baseflag mt-0"
                    src={selectedCurrency?.currencyFlag || "default-flag.png"} // Default fallback
                    alt="Currency Flag"
                  />
                  <select value={currencyCode} onChange={handleCurrencyChange}>
                    {currencyList.map((currency) => (
                      <option
                        key={currency.currencyID}
                        value={currency.currencyCode}
                      >
                        {currency.currencyCode}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="send_money">Destination Country</label>
                  <select
                    className="myselect"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    {countries.map((country) => (
                      <option key={country.countryID} value={country.countryID}>
                        {country.countryName}
                      </option>
                    ))}
                  </select>
                  <img
                    className="flagicon ddlcurrency_flag"
                    src={
                      selectedCountryDetails?.flag ||
                      selectedCountryDetails?.countryFlag
                    }
                    alt="Currency Flags"
                  />
                  <span className="inputgbp">{staticCurrencyCode}</span>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group form-btn">
                  <button
                    type="button"
                    className="btn-link w-100 tw-py-3 hover-text-neutral-20 text-white rounded-3 fw-semibold mt-3"
                    onClick={handleContinue}
                  >
                    Send Money
                  </button>
                </div>
              </div>

              <div className="col-lg-12 text-center mb-2">
                <p>
                  <span>Exchange Rate:</span>{" "}
                  <strong className="txtExchangeRates">
                    1 GBP = {rate} {currencyCode}
                  </strong>
                </p>
              </div>
               <div className="col-lg-12 text-center mb-2">
                <p>
                  <span>Transfer Fee</span>{" "}
                  <strong id="txtTransferFee" className="txtTransferFee">
                    £{`${fees}`}
                  </strong>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Calculator;
