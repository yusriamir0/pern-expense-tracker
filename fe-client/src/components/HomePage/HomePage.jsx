import Header from "../Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="md:max-w-4xl mb-16 md:mb-20">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">
              Transform Your Financial Management with Ease
            </span>
            <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
              Track Your Project Income and Expenses
            </h1>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Manage your money effortlessly and make smarter financial
              decisions with this user-friendly software, bringing you peace of
              mind and happiness.
            </p>
          </div>
          <div className="flex flex-wrap lg:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                  <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-green-500 rounded-lg"></div>
                </div>
                <div className="w-full md:flex-1 md:pt-3">
                  <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold">
                    Understand Your Spending Patterns
                  </h3>
                  <p className="text-coolGray-500 font-medium">
                    Stop wasting time logging expenses and tracking your income
                    by hand. With our software, effortlessly manage everything
                    in one place and enjoy the freedom and clarity it brings.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                  <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-green-500 rounded-lg"></div>
                </div>
                <div className="w-full md:flex-1 md:pt-3">
                  <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold">
                    Visualize Your Income and Expenses Over Time
                  </h3>
                  <p className="text-coolGray-500 font-medium">
                    See where your money goes each month and watch how it
                    evolves over time with our easy-to-use income and expenses
                    tracker, designed to bring you joy and peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                  <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-green-500 rounded-lg"></div>
                </div>
                <div className="w-full md:flex-1 md:pt-3">
                  <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold">
                    Stay on Top of Your Spending
                  </h3>
                  <p className="text-coolGray-500 font-medium">
                    Take charge of your finances with our friendly, easy-to-use
                    budgeting tool. Get started for free and enjoy the peace of
                    mind you deserve.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <img
                  src="https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_1280.jpg"
                  alt="home"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="relative py-24 md:pb-32 bg-white overflow-hidden">
        <div className="relative container px-4 mx-auto">
          <div className="xl:max-w-4xl mb-18 md:mb-16 mx-auto text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">
              Get Started
            </span>
            <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-heading font-bold">
              Save Time and Money with the Income and Expenses Tracker
            </h1>
            <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-heading">
              Ready to get started? [Sign Up Now] and take control of your
              finances with our ultimate Expense Tracker. Your path to financial
              clarity begins here.
            </p>
            <a
              className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
              href="#"
            >
              Get Started
            </a>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <img
              className="relative"
              src="https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_1280.jpg"
              alt="landing"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
