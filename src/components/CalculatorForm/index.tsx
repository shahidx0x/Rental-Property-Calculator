import useForm from "../../hooks/useForm";
import BigForm from "../calculator/BigForm";
import Divider from "../calculator/Divider";
import IncomeForm from "../calculator/IncomeForm";
import LoanForm from "../calculator/LoanForm";
import OwnershipForm from "../calculator/OwnershipForm";
import PropertyForm from "../calculator/PropertyForm";
import PurchaseForm from "../calculator/PurchaseForm";
import UtilityForm from "../calculator/UtilityForm";

type CalculatorFormProps = {
  setInfo: Function;
  setPurchase: Function;
  setLoan: Function;
  setIncome: Function;
  setOwnership: Function;
  setUtility: Function;
};

export default function CalculatorForm({
  setInfo,
  setPurchase,
  setLoan,
  setIncome,
  setOwnership,
  setUtility,
}: CalculatorFormProps) {
  const {setIsVisible} = useForm();
  const getFormData = (e: any): any => {
    const invalid = ["length", "item", "namedItem"];
    let data: any = {};
    for (const field in e.target.elements) {
      let unNeeded: boolean = invalid.includes(field);

      if (isNaN(parseInt(field)) && !unNeeded) {
        data[field] = e.target.elements[field].value;
      }
    }

    return data;
  };
  const handleBigForm = (e: any) => { 
    console.log(e);
    
    e.preventDefault();
    let { nickname, address, city, state, zip } = getFormData(e);
    let { purchasePrice, closingCost, rehabCost, propertyValueGrowth } =
      getFormData(e);
    let { isCashPurchase, loanAmount, interestRate, pmi, loanTerm } = getFormData(e);
  
    
    let { grossMonthlyRentalIncome, annualIncomeGrowthPercent, grossMonthlyOtherIncome } = getFormData(e);
    
    
   
    let { annualPropertyTaxExpense, annualPropertyInsuranceExpense, maintenancePercentage, vacancyPercentage, capexPercentage, managementPercentage } = getFormData(e);
    let { monthlyElectricityExpense, monthlyGasExpense, monthlyWaterAndSewerExpense, hoaExpense, monthlyGarbageExpense, monthlyOtherExpense, annualExpenseGrowthPercent, futureSalePercent } = getFormData(e);

    purchasePrice = parseFloat(purchasePrice);
    closingCost = parseFloat(closingCost);
    rehabCost = parseFloat(rehabCost);
    propertyValueGrowth = parseFloat(propertyValueGrowth);

    monthlyElectricityExpense = parseFloat(monthlyElectricityExpense);
    monthlyGasExpense = parseFloat(monthlyGasExpense);
    monthlyWaterAndSewerExpense = parseFloat(monthlyWaterAndSewerExpense);
    hoaExpense = parseFloat(hoaExpense);
    monthlyGarbageExpense = parseFloat(monthlyGarbageExpense);
    monthlyOtherExpense = parseFloat(monthlyOtherExpense);
    annualExpenseGrowthPercent = parseFloat(annualExpenseGrowthPercent);
    futureSalePercent = parseFloat(futureSalePercent);

    annualPropertyTaxExpense = parseFloat(annualPropertyTaxExpense);
    annualPropertyInsuranceExpense = parseFloat(annualPropertyInsuranceExpense);
    maintenancePercentage = parseFloat(maintenancePercentage);
    vacancyPercentage = parseFloat(vacancyPercentage);
    capexPercentage = parseFloat(capexPercentage);
    managementPercentage = parseFloat(managementPercentage);

    grossMonthlyRentalIncome = parseFloat(grossMonthlyRentalIncome);
    annualIncomeGrowthPercent = parseFloat(annualIncomeGrowthPercent);
    grossMonthlyOtherIncome = parseFloat(grossMonthlyOtherIncome);

    isCashPurchase = isCashPurchase === "on";
    loanAmount = parseFloat(loanAmount) 
    interestRate = parseFloat(interestRate) 
    pmi = parseFloat(pmi);
    loanTerm = parseFloat(loanTerm) 

    setInfo({
      complete: true,
      nickname,
      address,
      city,
      state,
      zip,
    });
    setPurchase({
      complete: true,
      purchasePrice,
      closingCost,
      rehabCost,
      propertyValueGrowth,
    });
    setLoan({
      complete: true,
      isCashPurchase,
      loanAmount,
      interestRate,
      pmi,
      loanTerm,
    });
    setIncome({
      complete: true,
      grossMonthlyRentalIncome,
      annualIncomeGrowthPercent,
      grossMonthlyOtherIncome,
    });
    setOwnership({
      complete: true,
      annualPropertyTaxExpense,
      annualPropertyInsuranceExpense,
      maintenancePercentage,
      vacancyPercentage,
      capexPercentage,
      managementPercentage,
    });
    setUtility({
      complete: true,
      monthlyElectricityExpense,
      monthlyGasExpense,
      monthlyWaterAndSewerExpense,
      hoaExpense,
      monthlyGarbageExpense,
      monthlyOtherExpense,
      annualExpenseGrowthPercent,
      futureSalePercent,
    });
    sessionStorage.setItem('isVis', 'true');
  }



  const handleInfo = (e: any) => {
    console.log(e);
    
    e.preventDefault();
    // Form Handlers
    const { nickname, address, city, state, zip } = getFormData(e);

    setInfo({
      complete: true,
      nickname,
      address,
      city,
      state,
      zip,
    });
  };
  const handlePurchase = (e: any) => {
    e.preventDefault();
    // Form Handlers
    let { purchasePrice, closingCost, rehabCost, propertyValueGrowth } =
      getFormData(e);

    purchasePrice = parseFloat(purchasePrice);
    closingCost = parseFloat(closingCost);
    rehabCost = parseFloat(rehabCost);
    propertyValueGrowth = parseFloat(propertyValueGrowth);

    setPurchase({
      complete: true,
      purchasePrice,
      closingCost,
      rehabCost,
      propertyValueGrowth,
    });
  };

  const handleLoan = (e: any) => {
    e.preventDefault();
    // Form Handlers
    let { isCashPurchase, loanAmount, interestRate, pmi, loanTerm } =
      getFormData(e);
  
    isCashPurchase = isCashPurchase === "on";
    loanAmount = parseFloat(loanAmount) 
    interestRate = parseFloat(interestRate) 
    pmi = parseFloat(pmi);
    loanTerm = parseFloat(loanTerm) 
   
  
    setLoan({
      complete: true,
      isCashPurchase,
      loanAmount,
      interestRate,
      pmi,
      loanTerm,
    });
  };

  const handleIncome = (e: any) => {

    
    e.preventDefault();
    // Form Handlers
    let {
      grossMonthlyRentalIncome,
      annualIncomeGrowthPercent,
      grossMonthlyOtherIncome,
    } = getFormData(e);

    grossMonthlyRentalIncome = parseFloat(grossMonthlyRentalIncome);
    annualIncomeGrowthPercent = parseFloat(annualIncomeGrowthPercent);
    grossMonthlyOtherIncome = parseFloat(grossMonthlyOtherIncome);
    console.log(grossMonthlyRentalIncome, annualIncomeGrowthPercent, grossMonthlyOtherIncome);
    setIncome({
      complete: true,
      grossMonthlyRentalIncome,
      annualIncomeGrowthPercent,
      grossMonthlyOtherIncome,
    });
  };

  const handleOwnership = (e: any) => {
    e.preventDefault();
    // Form Handlers
    let {
      annualPropertyTaxExpense,
      annualPropertyInsuranceExpense,
      maintenancePercentage,
      vacancyPercentage,
      capexPercentage,
      managementPercentage,
    } = getFormData(e);

    annualPropertyTaxExpense = parseFloat(annualPropertyTaxExpense);
    annualPropertyInsuranceExpense = parseFloat(annualPropertyInsuranceExpense);
    maintenancePercentage = parseFloat(maintenancePercentage);
    vacancyPercentage = parseFloat(vacancyPercentage);
    capexPercentage = parseFloat(capexPercentage);
    managementPercentage = parseFloat(managementPercentage);

    setOwnership({
      complete: true,
      annualPropertyTaxExpense,
      annualPropertyInsuranceExpense,
      maintenancePercentage,
      vacancyPercentage,
      capexPercentage,
      managementPercentage,
    });
  };

  const handleUtility = (e: any) => {
    e.preventDefault();
    // Form Handlers
    let {
      monthlyElectricityExpense,
      monthlyGasExpense,
      monthlyWaterAndSewerExpense,
      hoaExpense,
      monthlyGarbageExpense,
      monthlyOtherExpense,
      annualExpenseGrowthPercent,
      futureSalePercent,
    } = getFormData(e);

    monthlyElectricityExpense = parseFloat(monthlyElectricityExpense);
    monthlyGasExpense = parseFloat(monthlyGasExpense);
    monthlyWaterAndSewerExpense = parseFloat(monthlyWaterAndSewerExpense);
    hoaExpense = parseFloat(hoaExpense);
    monthlyGarbageExpense = parseFloat(monthlyGarbageExpense);
    monthlyOtherExpense = parseFloat(monthlyOtherExpense);
    annualExpenseGrowthPercent = parseFloat(annualExpenseGrowthPercent);
    futureSalePercent = parseFloat(futureSalePercent);

    setUtility({
      complete: true,
      monthlyElectricityExpense,
      monthlyGasExpense,
      monthlyWaterAndSewerExpense,
      hoaExpense,
      monthlyGarbageExpense,
      monthlyOtherExpense,
      annualExpenseGrowthPercent,
      futureSalePercent,
    });
  };

  return (
    <>
      <BigForm handleForm={(e: any) => handleBigForm(e)} />
      {/* <IncomeForm handleForm={(e: any) => handleIncome(e)} />
      <Divider /> */}
      {/* <PropertyForm handleForm={(e: any) => handleInfo(e)} />
      <Divider /> */}
      {/* <PurchaseForm handleForm={(e: any) => handlePurchase(e)} />
      <Divider />
      <LoanForm handleForm={(e: any) => handleLoan(e)} />
      <Divider />
     
      <OwnershipForm handleForm={(e: any) => handleOwnership(e)} />
      <Divider />
      <UtilityForm handleForm={(e: any) => handleUtility(e)} />
      <Divider /> */}
    </>
  );
}
