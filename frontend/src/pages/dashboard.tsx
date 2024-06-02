import { NoAuth } from "./noAuth";

export const Dashboard = (): React.ReactNode => {
  const isVerified = (): boolean => {
    const token = localStorage.getItem('token-expense-tracker');
    if(!token){
      return false;
    }
    return true;
  };
  return (
    <>{isVerified() 
      ? 
    
      <div className="flex flex-col h-full">
        <main className="flex-1 p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <div>
              <h2 className="text-xl font-bold mb-4 sm:text-2xl md:text-3xl">Dashboard</h2>

              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-8">
                  <span className="text-gray-500 mb-2 sm:mb-0">Total Spent</span>
                  <span className="text-2xl font-bold sm:text-3xl md:text-4xl">$2,345.67</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-8">
                  <span className="text-gray-500 mb-2 sm:mb-0">This Month</span>
                  <span className="text-2xl font-bold sm:text-3xl md:text-4xl">$987.54</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <span className="text-gray-500 mb-2 sm:mb-0">Last Month</span>
                  <span className="text-2xl font-bold sm:text-3xl md:text-4xl">$1,358.13</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 sm:text-2xl md:text-3xl">Add Expense</h2>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
                <form>
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <label htmlFor="name" className="block text-gray-500 font-bold mb-2 sm:mb-3 md:mb-4">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter expense name"
                    />
                  </div>
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <label htmlFor="amount" className="block text-gray-500 font-bold mb-2 sm:mb-3 md:mb-4">
                      Amount
                    </label>
                    <input
                      type="number"
                      id="amount"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter expense amount"
                    />
                  </div>
                  {/* <div className="mb-4 sm:mb-6 md:mb-8">
                    <label htmlFor="date" className="block text-gray-500 font-bold mb-2 sm:mb-3 md:mb-4">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div> */}
                  <button
                    type="submit"
                    className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
                  >
                    Add Expense
                  </button>
                </form>
              </div>
            </div>
            
          </div>
          {/* <div className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="text-xl font-bold mb-4 sm:text-2xl md:text-3xl">Expenses by Month</h2>
            <div className="bg-white rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 p-6 sm:p-8 md:p-10">
                <div className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-2 sm:text-xl md:text-2xl">January</h3>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3 md:mb-4">
                    <span className="text-gray-500 mb-2 sm:mb-0">Groceries</span>
                    <span className="text-gray-700 sm:text-right">$123.45</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3 md:mb-4">
                    <span className="text-gray-500 mb-2 sm:mb-0">Rent</span>
                    <span className="text-gray-700 sm:text-right">$1,200.00</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-gray-500 mb-2 sm:mb-0">Utilities</span>
                    <span className="text-gray-700 sm:text-right">$87.65</span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-2 sm:text-xl md:text-2xl">February</h3>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3 md:mb-4">
                    <span className="text-gray-500 mb-2 sm:mb-0">Groceries</span>
                    <span className="text-gray-700 sm:text-right">$145.78</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3 md:mb-4">
                    <span className="text-gray-500 mb-2 sm:mb-0">Dining Out</span>
                    <span className="text-gray-700 sm:text-right">$65.43</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-gray-500 mb-2 sm:mb-0">Gas</span>
                    <span className="text-gray-700 sm:text-right">$78.90</span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-2 sm:text-xl md:text-2xl">March</h3>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3 md:mb-4">
                    <span className="text-gray-500 mb-2 sm:mb-0">Rent</span>
                    <span className="text-gray-700 sm:text-right">$1,200.00</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3 md:mb-4">
                    <span className="text-gray-500 mb-2 sm:mb-0">Utilities</span>
                    <span className="text-gray-700 sm:text-right">$92.75</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-gray-500 mb-2 sm:mb-0">Entertainment</span>
                    <span className="text-gray-700 sm:text-right">$45.00</span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-2 sm:text-xl md:text-2xl">April</h3>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3 md:mb-4">
                    <span className="text-gray-500 mb-2 sm:mb-0">Groceries</span>
                    <span className="text-gray-700 sm:text-right">$156.89</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3 md:mb-4">
                    <span className="text-gray-500 mb-2 sm:mb-0">Dining Out</span>
                    <span className="text-gray-700 sm:text-right">$78.23</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-gray-500 mb-2 sm:mb-0">Gas</span>
                    <span className="text-gray-700 sm:text-right">$85.67</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="mt-6 sm:mt-8 md:mt-10">
            <h2 className="text-xl font-bold mb-4 sm:text-2xl md:text-3xl">Recent Transactions</h2>
            <div className="bg-white rounded-lg shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 text-left sm:py-3 sm:px-6 md:py-4 md:px-8">Name</th>
                    <th className="py-2 px-4 text-left sm:py-3 sm:px-6 md:py-4 md:px-8">Amount</th>
                    <th className="py-2 px-4 text-left sm:py-3 sm:px-6 md:py-4 md:px-8">Date</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">Groceries</td>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">$123.45</td>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">2023-04-15</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">Rent</td>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">$1,200.00</td>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">2023-04-01</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">Utilities</td>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">$87.65</td>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">2023-03-31</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">Dining Out</td>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">$45.78</td>
                    <td className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8">2023-03-25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>

      : 

        <NoAuth/>
      }
    </>
    )
}