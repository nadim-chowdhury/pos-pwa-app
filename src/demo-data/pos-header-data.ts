// POS Header Data
export const posHeader = {
  headerMenu: {
    file: {
      label: "File",
      icon: "file",
      roles: ["admin", "manager", "user"],
      subMenu: {
        open: {
          label: "Open",
          roles: ["admin", "manager", "user"],
          subMenu: {
            options: {
              label: "Options",
              roles: ["admin", "manager"],
              subMenu: {
                importGoods: {
                  label: "Import Goods",
                  roles: ["admin", "manager"],
                  route: "/import-goods",
                },
                orderGoods: {
                  label: "Order Goods",
                  roles: ["admin", "manager"],
                  route: "/order-goods",
                },
                onlineGoods: {
                  label: "Online Goods",
                  roles: ["admin", "manager"],
                  route: "/online-goods",
                },
                receiveGoods: {
                  label: "Receive Goods",
                  roles: ["admin", "manager"],
                  route: "/receive-goods",
                },
                distributeGoods: {
                  label: "Distribute Goods",
                  roles: ["admin", "manager"],
                  route: "/distribute-goods",
                },
                sendBarcode: {
                  label: "Send Barcode",
                  roles: ["admin", "manager"],
                  route: "/send-barcode",
                },
                receiveBarcode: {
                  label: "Receive Barcode",
                  roles: ["admin", "manager"],
                  route: "/receive-barcode",
                },
                goodsInformation: {
                  label: "Goods Information",
                  roles: ["admin", "manager", "user"],
                  route: "/goods-information",
                },
                receiveInformation: {
                  label: "Receive Information",
                  roles: ["admin", "manager", "user"],
                  route: "/receive-information",
                },
                autoClosing: {
                  label: "Auto Closing",
                  roles: ["admin"],
                  route: "/auto-closing",
                },
                returnGoods: {
                  label: "Return Goods",
                  roles: ["admin", "manager"],
                  route: "/return-goods",
                },
              },
            },
          },
        },
        addNew: {
          label: "Add New",
          roles: ["admin", "manager"],
          subMenu: {
            goodsName: {
              label: "Goods Name",
              roles: ["admin", "manager"],
              route: "/add-goods-name",
            },
            shop: {
              label: "Shop",
              roles: ["admin", "manager"],
              route: "/add-shop",
            },
            exporter: {
              label: "Exporter",
              roles: ["admin", "manager"],
              route: "/add-exporter",
            },
            factory: {
              label: "Factory",
              roles: ["admin", "manager"],
              route: "/add-factory",
            },
            brand: {
              label: "Brand",
              roles: ["admin", "manager"],
              route: "/add-brand",
            },
            supplier: {
              label: "Supplier",
              roles: ["admin", "manager"],
              route: "/add-supplier",
            },
            ledgerHead: {
              label: "Ledger Head",
              roles: ["admin", "manager"],
              route: "/add-ledger-head",
            },
            bankAccount: {
              label: "Bank Account",
              roles: ["admin", "manager"],
              route: "/add-bank-account",
            },
            discountMember: {
              label: "Discount Member",
              roles: ["admin", "manager"],
              route: "/add-discount-member",
            },
            employeeInfo: {
              label: "Employee Info",
              roles: ["admin", "manager"],
              route: "/add-employee",
            },
            resignation: {
              label: "Resignation",
              roles: ["admin", "manager"],
              route: "/add-resignation",
            },
            designation: {
              label: "Designation",
              roles: ["admin", "manager"],
              route: "/add-designation",
            },
          },
        },
        purchase: {
          label: "Purchase",
          roles: ["admin", "manager", "user"],
          route: "/purchase",
        },
        documentBarcode: {
          label: "Document Barcode",
          roles: ["admin", "manager", "user"],
          route: "/document-barcode",
        },
        smsManager: {
          label: "SMS Manager",
          roles: ["admin", "manager"],
          route: "/sms-manager",
        },
        styleSearch: {
          label: "Style Search",
          roles: ["admin", "manager", "user"],
          route: "/style-search",
          shortcut: "Ctrl+S",
        },
        scanBarcode: {
          label: "Scan Barcode",
          roles: ["admin", "manager", "user"],
          route: "/scan-barcode",
        },
        print: {
          label: "Print",
          roles: ["admin", "manager", "user"],
          route: "/print",
          shortcut: "Ctrl+P",
        },
        printerSelect: {
          label: "Printer Select...",
          roles: ["admin", "manager", "user"],
          route: "/printer-select",
        },
        exit: {
          label: "Exit",
          roles: ["admin", "manager", "user"],
          action: "exit",
          shortcut: "Ctrl+X",
        },
      },
    },
    edit: {
      label: "Edit",
      icon: "edit",
      roles: ["admin", "manager", "user"],
      subMenu: {
        customerInfo: {
          label: "Customer Info",
          roles: ["admin", "manager", "user"],
          route: "/customer-info",
        },
        goodsInformation: {
          label: "Goods Information",
          roles: ["admin", "manager", "user"],
          route: "/goods-information",
        },
        partyInformation: {
          label: "Party Information",
          roles: ["admin", "manager", "user"],
          route: "/party-information",
        },
        shopInformation: {
          label: "Shop Information",
          roles: ["admin", "manager", "user"],
          route: "/shop-information",
        },
        importGoods: {
          label: "Import Goods",
          roles: ["admin", "manager", "user"],
          route: "/import-goods",
        },
        orderGoods: {
          label: "Order Goods",
          roles: ["admin", "manager", "user"],
          route: "/order-goods",
        },
        distributeGoods: {
          label: "Distribute Goods",
          roles: ["admin", "manager", "user"],
          route: "/distribute-goods",
        },
        memberInfo: {
          label: "Member Info",
          roles: ["admin", "manager", "user"],
          route: "/member-info",
        },
        vipMember: {
          label: "VIP Member",
          roles: ["admin", "manager", "user"],
          route: "/vip-member",
        },
      },
    },
    view: {
      label: "View",
      icon: "eye",
      roles: ["admin", "manager", "user"],
      subMenu: {
        toolbar: {
          label: "Toolbar",
          roles: ["admin", "manager", "user"],
          action: "toggleToolbar",
          shortcut: "",
        },
        calculator: {
          label: "Calculator",
          roles: ["admin", "manager", "user"],
          route: "/calculator",
          shortcut: "F12",
        },
        calendar: {
          label: "Calendar",
          roles: ["admin", "manager", "user"],
          route: "/calendar",
          shortcut: "F2",
        },
        initialization: {
          label: "Initialization",
          roles: ["admin", "manager", "user"],
          route: "/initialization",
          shortcut: "F11",
        },
        manageBox: {
          label: "Manage Box",
          roles: ["admin", "manager", "user"],
          route: "/manage-box",
        },
        manageUser: {
          label: "Manage User",
          roles: ["admin", "manager", "user"],
          route: "/manage-user",
        },
        mediaSetup: {
          label: "Media Setup",
          roles: ["admin", "manager", "user"],
          route: "/media-setup",
        },
        option: {
          label: "Option...",
          roles: ["admin", "manager", "user"],
          route: "/option",
        },
        status: {
          label: "Status",
          roles: ["admin", "manager", "user"],
          route: "/status",
        },
      },
    },
    payroll: {
      label: "Payroll",
      icon: "dollar-sign",
      roles: ["admin", "manager"],
      subMenu: {
        employeeAdvance: {
          label: "Employee Advance",
          roles: ["admin", "manager"],
          route: "/employee-advance",
        },
        employeeAttendance: {
          label: "Employee Attendance",
          roles: ["admin", "manager"],
          route: "/employee-attendance",
        },
        employeeLeaveInfo: {
          label: "Employee Leave Info.",
          roles: ["admin", "manager"],
          route: "/employee-leave-info",
        },
        employeePromotion: {
          label: "Employee Promotion",
          roles: ["admin", "manager"],
          route: "/employee-promotion",
        },
        employeeRetirement: {
          label: "Employee Retirement",
          roles: ["admin", "manager"],
          route: "/employee-retirement",
        },
        employeePenalty: {
          label: "Employee Penalty",
          roles: ["admin", "manager"],
          route: "/employee-penalty",
        },
        employeeSalary: {
          label: "Employee Salary",
          roles: ["admin", "manager"],
          route: "/employee-salary",
        },
      },
    },
    accounts: {
      label: "Accounts",
      icon: "calculator",
      roles: ["admin", "manager"],
      subMenu: {
        bankTransaction: {
          label: "Bank Transaction",
          roles: ["admin", "manager"],
          route: "/bank-transaction",
        },
        purchaseVoucher: {
          label: "Purchase Voucher",
          roles: ["admin", "manager"],
          route: "/purchase-voucher",
        },
        paymentVoucher: {
          label: "Payment Voucher",
          roles: ["admin", "manager"],
          route: "/payment-voucher",
        },
        allExpenseInfo: {
          label: "All Expense Info.",
          roles: ["admin", "manager"],
          route: "/all-expense-info",
        },
        ownerActivity: {
          label: "Owner Activity",
          roles: ["admin", "manager"],
          route: "/owner-activity",
        },
        operationSummary: {
          label: "Operation Summary",
          roles: ["admin", "manager"],
          route: "/operation-summary",
        },
      },
    },
    reports: {
      label: "Report",
      icon: "file-text",
      roles: ["admin", "manager", "user"],
      subMenu: {
        accountReports: {
          label: "Account Reports",
          roles: ["admin", "manager", "user"],
          route: "/account-reports",
        },
        employeeReports: {
          label: "Employee Reports",
          roles: ["admin", "manager", "user"],
          route: "/employee-reports",
        },
        goodsReports: {
          label: "Goods Reports",
          roles: ["admin", "manager", "user"],
          route: "/goods-reports",
        },
        others: {
          label: "Other's",
          roles: ["admin", "manager", "user"],
          route: "/other-reports",
        },
      },
    },
    help: {
      label: "Help",
      icon: "help-circle",
      roles: ["admin", "manager", "user"],
      subMenu: {
        helpContent: {
          label: "Help Content",
          roles: ["admin", "manager", "user"],
          route: "/help-content",
          shortcut: "F1",
        },
        registerOnline: {
          label: "Register Online",
          roles: ["admin", "manager", "user"],
          route: "/register-online",
        },
        about: {
          label: "About",
          roles: ["admin", "manager", "user"],
          route: "/about",
        },
      },
    },
  },
  rolePermissions: {
    admin: {
      name: "Administrator",
      permissions: ["all"],
      description: "Full access to all features",
    },
    manager: {
      name: "Manager",
      permissions: ["read", "write", "update", "reports"],
      description: "Access to most features except system settings",
    },
    user: {
      name: "User",
      permissions: ["read", "basic_operations"],
      description: "Limited access to basic operations",
    },
  },
  quickActions: [
    {
      label: "Quick Sale",
      icon: "shopping-cart",
      route: "/quick-sale",
      roles: ["admin", "manager", "user"],
      shortcut: "Ctrl+Q",
    },
    {
      label: "Search Product",
      icon: "search",
      route: "/search-product",
      roles: ["admin", "manager", "user"],
      shortcut: "Ctrl+F",
    },
    {
      label: "Add Customer",
      icon: "user-plus",
      route: "/add-customer",
      roles: ["admin", "manager"],
      shortcut: "Ctrl+N",
    },
    {
      label: "Today's Report",
      icon: "calendar",
      route: "/todays-report",
      roles: ["admin", "manager"],
      shortcut: "Ctrl+T",
    },
  ],
};

// Toolbar configuration for POS main view
export const posToolbar = [
  {
    label: "Add",
    icon: "add", // placeholder, replace with actual icon if needed
    route: "/add-new",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Purchase",
    icon: "purchase",
    route: "/purchase",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Import",
    icon: "import",
    route: "/import-goods",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Distribute",
    icon: "distribute",
    route: "/distribute-goods",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Goods",
    icon: "goods",
    route: "/goods-information",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Send",
    icon: "send",
    route: "/send-barcode",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Receive",
    icon: "receive",
    route: "/receive-goods",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Salary",
    icon: "salary",
    route: "/employee-salary",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Report",
    icon: "report",
    route: "/report",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Calendar",
    icon: "calendar",
    route: "/calendar",
    roles: ["admin", "manager", "user"],
  },
  {
    label: "Status",
    icon: "status",
    route: "/status",
    roles: ["admin", "manager", "user"],
  },
];
