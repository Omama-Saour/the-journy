import React from "react";

function LogOutConfirm({ show, onConfirm, onCancel, isLoading }) {
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed inset-0 flex justify-center items-center z-50">
        <main className="flex flex-col justify-center items-center bg-white rounded-3xl min-w-[600px] min-h-[350px] p-10">
          <h4 className="mb-20">هل أنت متأكد من تسجيل الخروج؟</h4>
          <div className="flex space-x-5">
            {isLoading ? (
              <div className="flex justify-center items-center mt-10">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                <button
                  onClick={onCancel}
                  className="bg-white text-black border-2 border-solid border-stone-300"
                  style={{
                    padding: "24px, 50px, 24px, 50px",
                    borderRadius: "32px",
                    width: "200px",
                    height: "56px",
                  }}
                >
                  لا
                </button>
                <button
                  onClick={onConfirm}
                  className="bg-black text-white"
                  style={{
                    padding: "24px, 50px, 24px, 50px",
                    borderRadius: "32px",
                    width: "200px",
                    height: "56px",
                  }}
                  disabled={isLoading}
                >
                  نعم
                </button>
              </>
            )}
          </div>
        </main>
      </section>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

export default LogOutConfirm;
