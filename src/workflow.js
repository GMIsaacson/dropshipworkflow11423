import React, { useState } from "react";

const DropshippingWorkflow = () => {
  // Initialize state variables for each step in the process
  const [researchComplete, setResearchComplete] = useState(false);
  const [supplierSelected, setSupplierSelected] = useState(false);
  const [websiteCreated, setWebsiteCreated] = useState(false);
  const [inventoryConnected, setInventoryConnected] = useState(false);
  const [paymentSetUp, setPaymentSetUp] = useState(false);
  const [ordersAutomated, setOrdersAutomated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  function handleProceed() {
    if (currentStep === 1 && !researchComplete) {
      alert("Please complete research and choose a niche before proceeding.");
      return;
    }
    if (currentStep === 2 && !supplierSelected) {
      alert("Please select a supplier before proceeding.");
      return;
    }
    if (currentStep === 3 && !websiteCreated) {
      alert("Please create a website before proceeding.");
      return;
    }
    if (currentStep === 4 && !inventoryConnected) {
      alert(
        "Please connect to an inventory management system before proceeding."
      );
      return;
    }
    if (currentStep === 5 && !paymentSetUp) {
      alert("Please set up payment options before proceeding.");
      return;
    }
    if (currentStep === 6 && !ordersAutomated) {
      alert(
        "Please automate order confirmation and shipping updates before proceeding."
      );
      return;
    }
    if (currentStep === 6) {
      alert("All steps completed. Proceeding to next step.");
      return;
    }
    setCurrentStep(currentStep + 1);
  }

  function handleBack() {
    if (currentStep === 1) {
      return;
    }
    setCurrentStep(currentStep - 1);
  }

  return (
    <div>
      {currentStep === 1 && (
        <div>
          <h1>Step 1: Research and Choose a Niche</h1>
          <form>{/* Form inputs for research and niche selection */}</form>
          <button onClick={() => setResearchComplete(true)}>Complete</button>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <h1>Step 2: Select a Supplier</h1>
          <form>{/* Form inputs for supplier selection */}</form>
          <button onClick={() => setSupplierSelected(true)}>Complete</button>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <h1>Step 3: Create a Website</h1>
          <form>{/* Form inputs for website creation */}</form>
          <button onClick={() => setWebsiteCreated(true)}>Complete</button>
        </div>
      )}
      {currentStep === 4 && (
        <div>
          <h1>Step 4: Connect to Inventory Management System</h1>
          <form>
            {/* Form inputs for inventory management system connection */}
          </form>
          <button onClick={() => setInventoryConnected(true)}>Complete</button>
        </div>
      )}
      {currentStep === 5 && (
        <div>
          <h1>Step 5: Set Up Payment Options</h1>
          <form>{/* Form inputs for payment setup */}</form>
          <button onClick={() => setPaymentSetUp(true)}>Complete</button>
        </div>
      )}
      {currentStep === 6 && (
        <div>
          <h1>Step 6: Automate Order Confirmation and Shipping Updates</h1>
          <form>{/* Form inputs for order automation */}</form>
          <button onClick={() => setOrdersAutomated(true)}>Complete</button>
        </div>
      )}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleProceed}>Proceed</button>
    </div>
  );
};

export default DropshippingWorkflow;
