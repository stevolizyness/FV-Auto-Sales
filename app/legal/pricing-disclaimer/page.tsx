export default function PricingDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-charcoal mb-8">Pricing Disclaimer</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2024</p>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">Vehicle Pricing</h2>
              <p className="mb-6">
                All vehicle prices listed on this website and in our dealership are subject to change 
                without notice. Prices do not include applicable taxes, title fees, license fees, 
                registration fees, or documentation fees.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mb-4">Additional Fees</h2>
              <p className="mb-4">Additional fees that may apply include:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Tax, Title, and License Fees (varies by state and local regulations)</li>
                <li>Documentation Fee ($299)</li>
                <li>Dealer Fee ($699)</li>
                <li>Registration and Tag Fees</li>
                <li>Any applicable state and local taxes</li>
              </ul>

              <h2 className="text-2xl font-semibold text-charcoal mb-4">Financing Terms</h2>
              <p className="mb-6">
                All financing offers are on approved credit (OAC). Interest rates, terms, and 
                down payment requirements vary based on credit history, vehicle selection, and 
                lender guidelines. Not all customers will qualify for the lowest rates.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mb-4">Auction Access Program</h2>
              <p className="mb-6">
                The $300 auction access fee is a service charge for our bidding and procurement 
                services. This fee does not include the vehicle purchase price, auction fees, 
                transportation costs, or any applicable taxes and registration fees.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mb-4">Vehicle Availability</h2>
              <p className="mb-6">
                Vehicle availability and pricing are subject to change without notice. 
                We recommend confirming vehicle availability and final pricing with our 
                sales team before making a purchase decision.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mb-4">Trade-In Values</h2>
              <p className="mb-6">
                Trade-in values are estimates based on current market conditions and vehicle 
                condition. Final trade-in values are determined after physical inspection 
                and may vary from initial estimates.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mb-4">Accuracy of Information</h2>
              <p className="mb-6">
                While we strive to provide accurate and up-to-date information, we cannot 
                guarantee the accuracy of all information on our website. Please verify 
                all vehicle details, specifications, and pricing with our sales team.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mb-4">Errors and Omissions</h2>
              <p className="mb-6">
                We reserve the right to correct any errors or omissions in pricing or 
                vehicle information. We are not responsible for typographical errors or 
                omissions in vehicle descriptions or pricing.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Contact Information</h3>
                <p className="mb-2">For current pricing and availability, please contact:</p>
                <ul className="list-none space-y-1">
                  <li>VF Auto Sales LLC</li>
                  <li>Phone: (786) 600-5536</li>
                  <li>Email: Vfautosalesllc1@gmail.com</li>
                  <li>Address: 6827 Partridge Ln, Suite F, Orlando, FL 32807</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}