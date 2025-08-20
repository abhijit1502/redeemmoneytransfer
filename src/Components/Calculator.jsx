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
  const [baseCountryFlag, setBaseCountryFlag] = useState("");
  const [baseCurrencyCode, setBaseCurrencyCode] = useState("");
  const [foreignCurrencyCode, setForeignCurrencyCode] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  // --- State and refs for custom searchable dropdown ---
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const countryDropdownRef = useRef(null);
  const [hoveredCountryId, setHoveredCountryId] = useState(null); // For hover effect

  // --- START OF NEW LOGIC: Helper function to fix image path case-sensitivity ---
  const getLowercaseImagePath = (path) => {
    // If the path is not a valid string, return it as is.
    if (!path || typeof path !== 'string') {
      return path;
    }
    // Split the path into parts
    const parts = path.split('/');
    // Get the filename (the last part)
    const filename = parts.pop();
    // Convert only the filename to lowercase
    const lowercaseFilename = filename.toLowerCase();
    // Re-add the corrected filename to the path parts
    parts.push(lowercaseFilename);
    // Join the parts back together and return the corrected path
    return parts.join('/');
  };
  // --- END OF NEW LOGIC ---

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

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.countryID.toString());
    setSelectedCountryDetails(country);
    if (country) {
      setCurrencyCode(country.countryCurrency);
    }
    setIsCountryDropdownOpen(false);
    setSearchTerm("");
  };

  const handleCalculatedAmountChange = (event) => {
    event.preventDefault();
    let newCalculatedAmount = event.target.value;
    setRecipentGetInput(true);
    newCalculatedAmount = newCalculatedAmount.replace(/[^0-9.]/g, "");

    if (newCalculatedAmount.length > 12) {
      newCalculatedAmount = newCalculatedAmount.slice(0, 0);
    }

    setCalculatedAmount(newCalculatedAmount);
    setUserEnteredAmount(newCalculatedAmount / rate || "");
    setAmount(newCalculatedAmount / rate || "");
  };

  const handleAmountChange = (event) => {
    event.preventDefault();
    const newAmount = event.target.value;
    setyouSendInput(true);
    let cleanedAmount = newAmount.replace(/^0+/, "");
    if (cleanedAmount.endsWith(".00")) {
      cleanedAmount = cleanedAmount.slice(0, -3);
    }

    if (!isNaN(cleanedAmount)) {
      if (cleanedAmount.length <= 12) {
        setAmount(cleanedAmount);
        setUserEnteredAmount(cleanedAmount);
      } else {
        setAmount(cleanedAmount.substring(0, 12));
        setUserEnteredAmount(cleanedAmount.substring(0, 12));
      }
    } else {
      setAmount("0");
      setUserEnteredAmount("0");
      setCalculatedAmount("0");
    }
  };
  const handleAmountBlur = (event) => {
    let value = event.target.value;
    value = value.replace(/[^0-9.]/g, "");

    if (!isNaN(value) && value !== "") {
      const numericValue = parseFloat(value);
      if (numericValue > 0) {
        const formattedValue = numericValue.toFixed(2);
        setAmount(formattedValue);
        setUserEnteredAmount(formattedValue);
        event.target.value = formattedValue;
      } else {
        setAmount("0");
        setUserEnteredAmount("0");
        event.target.value = "0";
      }
    } else {
      setAmount("0");
      setUserEnteredAmount("0");
      event.target.value = "0";
    }
  };

  const handleInputFocusOut = () => {
    setMinimumFractionDigits(2);
  };

  const handleInputFocus = () => {
    setMinimumFractionDigits(0);
  };

  const handleContinue = (event) => {
    event.preventDefault();
    if (!selectedCollectionType || !selectedDeliveryType || !amount) {
      toast.error("Please Fill All The Details.");
      return;
    }
    toast.success("Amount Calculated Successfully!");
    window.open("https://redeemtransfer.net/app/", "_blank");
  };

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
      setBaseCurrencyId1(selectedId);
      setBaseCurrencyCode(selectedCurrency.countryCurrency);
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
              setSelectedCurrency(firstCurrency);
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

    const selectedCurrency = currencyList.find(
      (currency) => currency.currencyCode === selectedCode
    );

    if (selectedCurrency) {
      setSelectedCurrency(selectedCurrency);
      setForeignCurrencyCode(selectedCurrency.currencyID.toString());
    }
  };

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
          const sortedCountries = response.data.data.sort((a, b) =>
            a.countryName.localeCompare(b.countryName)
          );
          setCountries(sortedCountries);

          if (!selectedCountry) {
            const firstCountry = sortedCountries[0];
            setSelectedCountry(firstCountry.countryID.toString());
            setSelectedCountryDetails(firstCountry);
          } else {
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
    if (!selectedCountry) return;
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
    if (!selectedCountry) return;
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.countryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Your provided styles as a JavaScript object ---
  const dropdownStyles = {
    dropdownContainer: {
      position: "relative",
    },
    dropdownHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "55px",
      backgroundColor: "transparent",
      borderBottom: "1px solid #000", // Adjusted for better visibility
      padding: "10px 15px", // Adjusted padding
      color: "#000", // Adjusted for consistency with other inputs
      fontWeight: "normal", // Adjusted for consistency
      fontSize: "16px",
      cursor: "pointer",
      position: "relative",
      boxSizing: "border-box", // Important for correct sizing
    },
    dropdownHeaderText: {
      flexGrow: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingLeft: "35px", // Make space for the absolutely positioned flag
      fontWeight: "bolder",
      color: "#000",
      fontSize: "20px"
    },
    dropdownArrow: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)',
      border: 'solid #000',
      borderWidth: '0 1px 1px 0',
      display: 'inline-block',
      padding: '4px',
    },
    dropdownListContainer: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#fff",
      zIndex: 1000,
      maxHeight: "250px",
      overflowY: "auto",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    searchInput: {
      width: "calc(100% - 20px)",
      padding: "10px",
      margin: "10px",
      border: "1px solid #eee",
      borderRadius: "5px",
      boxSizing: "border-box",
      fontSize: "16px",
      outline: 'none',
    },
    dropdownListItem: {
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      cursor: "pointer",
      color: "#000",
      fontSize: "16px",
      gap: '10px',
      fontWeight:"bolder"
    },
    dropdownListItemHover: {
      backgroundColor: "#f0f0f0",
    },
    flagInDropdownHeader: {
      position: 'absolute',
      left: '0px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    currencyCodeInHeader: {
      color: '#888',
      fontWeight: '500',
      marginLeft: 'auto', // Pushes it to the right
      paddingRight: '30px', // Space before the arrow
    }
  };


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
                    <img
                      className="flagicon baseflag mt-0"
                      src={
                        getLowercaseImagePath(baseCurrencyData.find( // Applied fix here
                          (currency) =>
                            currency.baseCurrencyID.toString() ===
                            baseCurrencyId1
                        )?.countryFlag) || "assets/images/flags/gbp.png"
                      }
                      alt="Selected Country Flag"
                      style={{ verticalAlign: "middle" }}
                    />
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
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    onChange={handleCalculatedAmountChange}
                    onBlur={handleInputFocusOut}
                    onFocus={handleInputFocus}
                    disabled={rate === 0 ? true : false}
                    maxLength={12}
                    placeholder="0.00"
                  />
                  <img
                    className="flagicon baseflag mt-0"
                    src={getLowercaseImagePath(selectedCurrency?.currencyFlag) || "default-flag.png"} // Applied fix here
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

              {/* --- Custom Searchable Dropdown for Destination Country --- */}
              <div className="col-lg-12 col-md-12">
                <div className="form-group" ref={countryDropdownRef}>
                  <label htmlFor="send_money">Destination Country</label>
                  <div style={dropdownStyles.dropdownContainer}>
                    <div
                      style={dropdownStyles.dropdownHeader}
                      onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
                    >
                      <img
                        src={getLowercaseImagePath(selectedCountryDetails?.flag || selectedCountryDetails?.countryFlag)} // Applied fix here
                        alt="flag"
                        style={dropdownStyles.flagInDropdownHeader}
                      />
                      <span style={dropdownStyles.dropdownHeaderText}>
                        {selectedCountryDetails?.countryName || "Select Country"}
                      </span>
                      <span className="d-none" style={dropdownStyles.currencyCodeInHeader}>{staticCurrencyCode}</span>
                      <span style={dropdownStyles.dropdownArrow}></span>
                    </div>

                    {isCountryDropdownOpen && (
                      <div style={dropdownStyles.dropdownListContainer}>
                        <input
                          type="text"
                          style={dropdownStyles.searchInput}
                          placeholder="Search country..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          autoFocus
                        />
                        <div>
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <div
                                key={country.countryID}
                                style={
                                  hoveredCountryId === country.countryID
                                    ? { ...dropdownStyles.dropdownListItem, ...dropdownStyles.dropdownListItemHover }
                                    : dropdownStyles.dropdownListItem
                                }
                                onMouseEnter={() => setHoveredCountryId(country.countryID)}
                                onMouseLeave={() => setHoveredCountryId(null)}
                                onClick={() => handleCountrySelect(country)}
                              >
                                <span>{country.countryName}</span>
                              </div>
                            ))
                          ) : (
                            <div style={dropdownStyles.dropdownListItem}>
                              No countries found
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
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
                    1 {baseCurrencyCode} = {rate} {currencyCode}
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