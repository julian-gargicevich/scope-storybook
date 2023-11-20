import { Input, InputRef, Modal } from "antd";
import ScopeLogo from "assets/images/scope-logo.png";
import { useRef, useState } from "react";

const Navigation = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const inputRef = useRef<InputRef>(null);
  return (
    <div className="flex flex-row items-center px-10 py-5 shadow">
      <div className="flex-1">
        <img className="h-8" src={ScopeLogo} alt="Scope Logo" />
      </div>

      <div
        className="flex-1 cursor-pointer rounded-3xl border border-solid border-gray-300 p-3 px-4 shadow transition-colors duration-300 hover:border-solid hover:border-primary hover:outline-none"
        onClick={() => setIsOpenSearch(true)}
      >
        <span className="text-sm text-gray-500">
          Search for an asset, fund, company or location
        </span>
      </div>
      <div className="flex-1" />
      <Modal
        open={isOpenSearch}
        afterOpenChange={(isOpen) => {
          if (isOpen) {
            inputRef.current?.focus();
          }
        }}
        onCancel={() => setIsOpenSearch(false)}
        destroyOnClose
        footer={null}
        width={600}
        styles={{
          mask: {
            backgroundColor: "rgba(0,0,0,0.2)",
            backdropFilter: "blur(5px)",
          },
          content: {
            // borderRadius: 0,
          },
        }}
        closable={false}
      >
        <Input
          ref={inputRef}
          className="rounded-3xl p-3 px-4 shadow transition-colors duration-300 hover:border-solid hover:border-primary hover:outline-none"
          placeholder="Search for an asset, fund, company or location"
        />
      </Modal>
    </div>
  );
};

export default Navigation;
