import React from "react";
import Image from "next/image";

const WeServeSec = () => {
  return (
    <section className="we-serve-section py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-secondary mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our services are designed to meet the needs of a broad range of
            clients, including
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col space-y-8 px-14">
          {/* First Row - 3 Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/*Card 1*/}
            <div className="bg-white rounded-lg shadow-md  flex-1 max-w-sm text-center relative mt-10">
              {/* Fully rounded icon circle */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/hospital.png"
                    alt="Web Development Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 pt-16">
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  Hospitals and Medical Centers
                </h3>
                <p className="text-gray-600 text-sm">
                  Hospitals and Medical Centers Supplementing clinical teams
                  with certified care associates for inpatient support, patient
                  mobility, hygiene care, observation, and discharge assistance.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md  flex-1 max-w-sm text-center relative mt-10">
              {/* Fully rounded icon circle */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/nurse.png"
                    alt="Web Development Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 pt-16">
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  Nursing Homes and Assisted Living Facilities
                </h3>
                <p className="text-gray-600 text-sm">
                  Providing 24/7 staffing support and care aides trained in
                  elder care, dementia support, rehabilitation, and post-acute
                  services.{" "}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md  flex-1 max-w-sm text-center relative mt-10">
              {/* Fully rounded icon circle */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/home.png"
                    alt="Web Development Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 pt-16">
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  Private Homes and Families
                </h3>
                <p className="text-gray-600 text-sm">
                  Offering personalized home care plans tailored to each
                  individual’s needs, including companionship, ADL (Activities
                  of Daily Living) assistance, hygiene support, medication
                  reminders, and more.{" "}
                </p>{" "}
              </div>
            </div>
          </div>

          {/* Second Row - 2 Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md  flex-1 max-w-sm text-center relative mt-10">
              {/* Fully rounded icon circle */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/home.png"
                    alt="Web Development Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 pt-16">
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  Hospice and Palliative Care Providers
                </h3>
                <p className="text-gray-600 text-sm">
                  Supporting patients and families with compassionate
                  end-of-life care that prioritizes comfort, emotional support,
                  and dignity.{" "}
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md  flex-1 max-w-sm text-center relative mt-10">
              {/* Fully rounded icon circle */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/disability.png"
                    alt="Web Development Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 pt-16">
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  Disability Support Services
                </h3>
                <p className="text-gray-600 text-sm">
                  Delivering respectful, empowering care to individuals with
                  physical or developmental disabilities to enhance independence
                  and quality of life.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeServeSec;
