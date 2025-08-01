import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiConfig from "./ApiConfig";
// REMOVED: No longer need the static JSON map
// import countryIdPageMapping from "./CountryIdMap.json";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Modal, Button } from "react-bootstrap";

function Calculator() {
  const [countries, setCountries] = useState([]);
  // UPDATED: Initialize selectedCountry as null. It will be set by a useEffect.
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedBranchId, setSelectedBranchId] = useState("2");
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState("100.00");
  const [rate, setRate] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");
  const [staticCurrencyCode, setstaticCurrencyCode] = useState("");
  const [fees, setFees] = useState("00");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
  const [loading, setloading] = useState(false);
  const [userEnteredAmount, setUserEnteredAmount] = useState(amount);
  const [minimumFractionDigits, setMinimumFractionDigits] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = "../ApiConfig.js";
  const location = useLocation();
  const amountTimeoutRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery2, setSearchQuery2] = useState("");

  const filteredCurrencies = baseCurrencyData.filter(
    (currency) =>
      currency.countryCurrency
        .toLowerCase()
        .includes(searchQuery2.toLowerCase()) ||
      currency.countryName.toLowerCase().includes(searchQuery2.toLowerCase())
  );

  const handleOpenModal = (event) => {
    event.preventDefault(); // Prevent page reload
    setShowModal(true); // Open modal when "Change" button is clicked
  };

  const handlePaymentTypeChange = (payTypeID) => {
    setSelectedPaymentType(payTypeID);
    setpaymenttypeId(payTypeID.toString());
    setShowModal(false); // Close modal after selection
  };

  const [baseCountryFlag, setBaseCountryFlag] = useState("");
  const [baseCurrencyCode, setBaseCurrencyCode] = useState("");
  const [foreignCurrencyCode, setForeignCurrencyCode] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const countryDropdownRef = useRef(null);
  const currencyDropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false); // country dropdown
      }
      if (
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); // currency dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // NEW/UPDATED useEffect to set country from URL or default
  useEffect(() => {
    // This effect runs when countries are loaded or the URL changes.
    // It sets the initial recipient country.
    if (countries.length === 0) {
      return; // Wait for countries to be fetched.
    }

    const path = location.pathname; // e.g., /money-transfer-to-india
    const prefix = "/money-transfer-to-";
    let matchedCountry = null;

    if (path.startsWith(prefix)) {
      // Extract 'india' or 'south-africa'
      const urlCountrySlug = path.substring(prefix.length);
      // Convert 'south-africa' to 'south africa' for matching
      const countryNameFromUrl = urlCountrySlug.replace(/-/g, " ");

      // Find the matching country in our API list (case-insensitive)
      matchedCountry = countries.find(
        (country) =>
          country.countryName.toLowerCase() === countryNameFromUrl.toLowerCase()
      );
    }

    // If we found a match from the URL, use it.
    // Otherwise, use the first country in the list as a default.
    const countryToSet = matchedCountry || countries[0];

    if (countryToSet) {
      setSelectedCountry(countryToSet.countryID.toString());
      setSelectedCountryDetails(countryToSet);
    }
  }, [countries, location.pathname]); // Rerun when countries load or URL changes


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
    const cleanedAmount = newAmount.replace(/^0+/, "");

    // Check if the cleaned amount is a valid number
    if (!isNaN(cleanedAmount)) {
      // Limit the input to 8 digits
      if (cleanedAmount.length <= 12) {
        setAmount(cleanedAmount);
        setUserEnteredAmount(cleanedAmount);
      } else {
        // Allow input after 8 digits
        setAmount(cleanedAmount.substring(0, 0)); // Limit to 8 digits
        setUserEnteredAmount(cleanedAmount.substring(0, 0));
      }
    } else {
      // Handle non-numeric input
      setAmount("0");
      setUserEnteredAmount("0");
      setRate("0");
      setFees("0");
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
      return;
    }
    //  toast.success("Amount Calculated Successfully!");
    // Open the link in a new tab
    window.open("https://www.tassapay.co.uk/app/app-login", "_blank");
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

  const handleBasecountryIdChange = (selectedId) => {
    const currency = baseCurrencyData.find(
      (item) => item.baseCurrencyID.toString() === selectedId.toString()
    );

    if (currency) {
      setBaseCurrencyId1(selectedId);
      setBaseCurrencyCode(currency.countryCurrency);
      setSelectedCurrency({
        countryFlag: currency.countryFlag || "images/flags/gbp.png",
        countryCurrency: currency.countryCurrency || "GBP",
      });
    }
  };

  useEffect(() => {
    // ADDED: Guard to prevent running with null selectedCountry
    if (selectedCountry && selectedBranchId) {
      setloading(true); // Start loading before API call

      axios
        .post(`${ApiConfig.baseUrl}/currency/currencylist`, {
          countryID: selectedCountry.toString(),
          clientID: "1",
        })
        .then((response) => {
          const data = response?.data?.data;

          if (Array.isArray(data) && data.length > 0) {
            setCurrencyList(data);
            const firstCurrency = data[0];

            if (firstCurrency) {
              setCurrencyCode(firstCurrency.currencyCode);
              setSelectedCurrency(firstCurrency);
              setForeignCurrencyCode(
                firstCurrency.currencyID?.toString() || ""
              );
              setstaticCurrencyCode(firstCurrency.currencyCode);
            }
          } else {
            console.warn("Currency list is empty or invalid:", response?.data);
            setCurrencyList([]); // Ensure it does not remain undefined
          }
        })
        .catch((error) => {
          console.error("Error fetching currency list:", error);
        })
        .finally(() => {
          setloading(false); // Stop loading in all cases
        });
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

  // UPDATED: This useEffect now just fetches and sets the countries list.
  // The logic to set the default/URL country has been moved to a separate useEffect.
  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/currency/currencylist`, {
        clientID: "1",
        countryID: "0",
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          const countriesFromApi = response.data.data;

          const uniqueCountries = countriesFromApi.filter(
            (country, index, self) =>
              index ===
              self.findIndex((c) => c.countryName === country.countryName)
          );

          const sortedUniqueCountries = uniqueCountries.sort((a, b) => {
            const nameA = a.countryName || "";
            const nameB = b.countryName || "";
            return nameA.localeCompare(nameB);
          });

          setCountries(sortedUniqueCountries);
        }
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []); // This useEffect runs only once on component mount

  // Handle country selection
  const handleSelect = (country) => {
    setSelectedCountry(country.countryID);
    setSelectedCountryDetails(country);
    setIsOpen(false);
  };

  const filteredCountries = countries.filter(
    (country) =>
      // Search by Country Name
      (country.countryName &&
        country.countryName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      // Search by Currency Code
      (country.currencyCode &&
        country.currencyCode.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    // ADDED: Guard to prevent running with null selectedCountry
    if (selectedCountry) {
      axios
        .post(`${ApiConfig.baseUrl}/collection/getcollectiontype`, {
          clientID: "1",
          branchID: selectedBranchId,
          countryID: selectedCountry.toString(),
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
    }
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    // ADDED: Guard to prevent running with null selectedCountry
    if (selectedCountry) {
      axios
        .post(`${ApiConfig.baseUrl}/deliverytype/getdeliverytype`, {
          clientID: "1",
          branchID: selectedBranchId,
          countryID: selectedCountry.toString(),
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
    }
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/paymenttype/getpaytypes`, {
        clientID: "1",
        branchID: selectedBranchId,
        customerID: "",
        baseCountryID:
          baseCurrencyId1.toString() || BasecurrencyId.toString() || "1",
        isApp: "0",
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setPaymentTypes(response.data.data);
          const defaultCollectionType = response.data.data[0];
          if (defaultCollectionType) {
            setpaymenttypeId(defaultCollectionType.payTypeID.toString());
            setSelectedPaymentType(defaultCollectionType.payTypeID);
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
                setRate("0");
                setAmount("0");
                setCalculatedAmount("0");
                setRecipentGetInput(false);
              }
            } else {
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

  const [formattedTotal, setFormattedTotal] = useState(null);

  useEffect(() => {
    // Delay calculation only if both amount and rate are valid numbers
    if (!isNaN(parseFloat(amount)) && !isNaN(parseFloat(fees))) {
      const total = parseFloat(amount) + parseFloat(fees);

      // Optional delay to simulate loading
      setTimeout(() => {
        setFormattedTotal(total.toFixed(2));
      }, 500); // 5 second delay
    }
  }, [amount, fees]);

  return (
    <>
      <div className="cal_css">
        <div className="service-charge-wrap">
          <form className="charge-form">
            <div className="d-flex justify-content-center calculator">
              <label
                htmlFor="send_money"
                style={{ textAlign: "left", marginBottom: "5px" }}
              >
                You Send
              </label>
              <div className="d-flex justify-content-between gap-2 w-100">
                <input
                  type="text"
                  id="Number1"
                  name="send_money"
                  className="send-money-input"
                  value={
                    amount === ""
                      ? "0"
                      : amount.toLocaleString("en-US", {
                          minimumFractionDigits: minimumFractionDigits,
                          maximumFractionDigits: 2,
                        })
                  }
                  onChange={handleAmountChange}
                  onBlur={handleAmountBlur}
                  disabled={rate === 0 ? true : false}
                  maxLength={12}
                  placeholder="0.00"
                />

                <div className="form-group ">
                  <div
                    className="send-money-side "
                    onClick={() => {
                      setIsOpen(false); // Close the other dropdown
                      setIsDropdownOpen((prev) => !prev); // Toggle this one
                    }}
                  >
                    <div className="common-img">
                      <img
                        className="common-img"
                        src={
                          selectedCurrency?.countryFlag ||
                          "images/flags/gbp.png"
                        }
                        alt="Selected Country Flag"
                      />
                    </div>
                    <div className="font-bold">
                      {selectedCurrency?.countryCurrency || "GBP"}
                    </div>
                    <div className="ml-2">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
              {isDropdownOpen && (
                <div
                  className="w-100"
                  style={{ display: "flex", justifyContent: "center" }}
                  ref={currencyDropdownRef}
                >
                  <div className="mt-2 dropdown-clc w-full bg-white border rounded-lg shadow-lg z-10">
                    <div className="p-1 pt-2 pb-2 flex items-center border-b">
                      <input
                        type="text"
                        className=""
                        style={{
                          fontWeight: "400",
                          borderRadius: "8px",
                          border: "1px solid #000",
                        }}
                        placeholder="Search currency..."
                        value={searchQuery2}
                        onChange={(e) => setSearchQuery2(e.target.value)}
                      />
                    </div>

                    <ul className="currency-list p-2">
                      {filteredCurrencies.length > 0 ? (
                        [...filteredCurrencies]
                          .sort((a, b) =>
                            a.countryName.localeCompare(b.countryName)
                          )
                          .map((currency) => (
                            <li
                              key={currency.baseCurrencyID}
                              className="d-flex gap-3 align-items-center pt-3 pb-3 hover:bg-gray-200 cursor-pointer"
                              onClick={() => {
                                handleBasecountryIdChange(
                                  currency.baseCurrencyID
                                );
                                setIsDropdownOpen(false); // Close dropdown on selection
                              }}
                            >
                              <img
                                src={currency.countryFlag}
                                alt={currency.countryCurrency}
                                className=" mr-2 common-img"
                              />

                              <span
                                style={{ fontWeight: "600", fontSize: "17px" }}
                              >
                                {currency.countryCurrency}
                              </span>
                              <span
                                style={{ fontWeight: "500", fontSize: "16px" }}
                              >
                                {currency.countryName}
                              </span>
                            </li>
                          ))
                      ) : (
                        <li className="text-center p-3 text-gray-500">
                          No results found
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              <select
                label="Collection Type"
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

              <label
                htmlFor="send_money "
                style={{
                  textAlign: "left",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                Recipient gets
              </label>
              <div className="d-flex justify-content-between gap-3 w-100">
                <input
                  className="send-money-input"
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
                <div className="form-group ">
                  <div
                    className="send-money-side"
                    onClick={() => {
                      setIsDropdownOpen(false); // Close the other dropdown
                      setSearchQuery("");      // Clear the search query when opening
                      setIsOpen((prev) => !prev); // Toggle this one
                    }}
                  >
                    {loading ? (
                      <Skeleton width={80} height={30} />
                    ) : (
                      <>
                        {selectedCountryDetails && (
                          <div className="common-img">
                            <img
                              src={
                                typeof selectedCountryDetails.currencyFlag ===
                                "string"
                                  ? `/${selectedCountryDetails.currencyFlag.toLowerCase()}`
                                  : ""
                              }
                              alt={selectedCountryDetails.countryName}
                              className=" mr-2 common-img"
                            />
                          </div>
                        )}
                        <div>
                          {selectedCountryDetails && (
                            <span style={{ fontWeight: "600" }}>
                              {selectedCountryDetails.currencyCode}
                            </span>
                          )}
                        </div>
                        <span>
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </>
                    )}
                  </div>
                  {isOpen && (
                    <div
                      className="w-100 "
                      style={{ display: "flex", justifyContent: "center" }}
                      ref={countryDropdownRef}
                    >
                      <div className="mt-2 dropdown-clc w-full bg-white border rounded-lg shadow-lg z-10">
                        <div className="p-1 pt-2 pb-2 flex items-center border-b">
                          <input
                            type="text"
                            className=""
                            style={{
                              fontWeight: "400",
                              borderRadius: "8px",
                              border: "1px solid #000",
                            }}
                            placeholder="Type a country or currency"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                        <ul className="">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <li
                                key={country.countryID}
                                className="d-flex  gap-3 align-items-center pt-3 pb-3 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleSelect(country)}
                              >
                                <img
                                  src={
                                    typeof country.currencyFlag === "string"
                                      ? `/${country.currencyFlag.toLowerCase()}`
                                      : ""
                                  }
                                  alt={country.countryName}
                                  className=" mr-2 common-img"
                                />
                                <span className="currencycodecss">
                                  {country.currencyCode}
                                </span>
                                <span className="countryNamecss">
                                  {country.countryName}
                                </span>
                              </li>
                            ))
                          ) : (
                            <li
                              className="p-3 text-gray-500"
                              style={{ fontWeight: "600" }}
                            >
                              No results found
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <label
              className="d-npne"
                htmlFor="send_money "
                style={{
                  textAlign: "left",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                Paying with
              </label>
              <div
                className="d-flex d-none justify-content-between align-items-center p-2 rounded"
                style={{ border: "1px solid #000" }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="payment-icon bg-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <img
                      src={`assets/images/icon/${
                        paymentTypes.find(
                          (type) => type.payTypeID === selectedPaymentType
                        )?.payTypeImg || "bank-transfer.svg"
                      }`}
                      alt="Payment Method"
                      style={{ width: "24px" }}
                    />
                  </div>
                  <span className="ms-3 fw-bold">
                    {paymentTypes.find(
                      (type) => type.payTypeID === selectedPaymentType
                    )?.payType || "Pay with Bank"}
                  </span>
                </div>
                <button
                  className="btn mb-0  btn-light text-success d-flex align-items-center"
                  style={{
                    background: "#d2f3e4",
                    borderRadius: "40px",
                    fontSize: "14px",
                  }}
                  onClick={handleOpenModal}
                >
                  Change <i className="ms-1 fas fa-angle-right"></i>
                </button>
              </div>

              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Select Payment Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul className="list-group">
                    {paymentTypes.map((paymentType) => (
                      <li
                        key={paymentType.payTypeID}
                        className={`list-group-item d-flex mb-3 justify-content-between align-items-center ${
                          paymentType.payTypeID === selectedPaymentType
                            ? "active"
                            : ""
                        }`}
                        style={{
                          cursor: "pointer",
                          border: "1px solid #000",
                          borderRadius: "10px",
                        }}
                        onClick={() =>
                          handlePaymentTypeChange(paymentType.payTypeID)
                        }
                      >
                        <div className="d-flex align-items-center">
                          <span className="fw-semibold">
                            {paymentType.payType}
                          </span>
                        </div>
                        {paymentType.payTypeID === selectedPaymentType && (
                          <i
                            className="far fa-check-circle text-success"
                            style={{ fontSize: "18px" }}
                          ></i>
                        )}
                      </li>
                    ))}
                  </ul>
                </Modal.Body>
              </Modal>

              <div
                className="mt-2 p-3"
                style={{
                  border: "1px solid #000",
                  borderRadius: "8px",
                }}
              >
                <div className="d-flex justify-content-between">
                  <span>
                    Guaranteed Rate <span>1 GBP</span>{" "}
                  </span>
                  <span style={{ color: "#000", fontWeight: "600" }}>
                    {rate !== 0 ? `${rate}` : "0"}{" "}
                    {selectedCountryDetails?.currencyFlag
                      ? selectedCountryDetails.currencyFlag
                          .split("/")
                          .pop()
                          .split(".")[0]
                          .toUpperCase()
                      : "00"}
                  </span>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <span>Our Fees</span>
                  <span style={{ color: "#000", fontWeight: "600" }}>
                    {rate !== 0 ? fees : "0"} GBP
                  </span>
                </div>
                <hr style={{ border: "1px solid #333", margin: "10px 0" }} />
                <div className="d-flex justify-content-between mt-2">
                  <span style={{ fontWeight: "bold" }}>
                    Total included fees{" "}
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "#000",
                    }}
                  >
                    {formattedTotal ? (
                      `${formattedTotal} GBP`
                    ) : (
                      <Skeleton width={100} height={20} />
                    )}
                  </span>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="text-center">
                  <button
                    type="button"
                    className="btn-link w-100 tw-py-3 text-white rounded-3 fw-semibold mt-3"
                    onClick={handleContinue}
                  >
                    Send Money
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Calculator;