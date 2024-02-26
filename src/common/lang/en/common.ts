const common_en = {
  company: "HEATHY FOOD Co., Ltd",
  menu: {
    dashboard: "Dashboard",
    customer: "Customer",
    product: "Product",
    order: "Order",
    shipment: "Shipment",
    category: "Category",
    subcategory: "Sub category",
  },
  form: {
    label: {
      account: "Account",
      password: "Password",
      oldPassword: "Old password",
      newPassword: "New password",
      firstName: "First name",
      lastName: "Last name",
      fullName: "Full name",
      phone: "Phone",
      email: "Email",
      gender: "Gender",
      birthday: "Birthday",
      role: "Role",
      fullAddress: "Address",
      addressEn: "Address (EN)",
      addressVn: "Address (VN)",
      city: "City/Province",
      district: "District",
      ward: "Ward",
      note: "Note",
      unit: "Unit",
      productNameEn: "Product name (EN)",
      productNameVn: "Product name (VN)",
      status: "Status",
      origin: "Origin",
      inventory: "Inventory",
      inventoryStatus: "Inventory status",
      cost: "Cost",
      profit: "Profit",
      price: "Total price",
      category: "Category",
      subCategory: "Sub category",
      supplier: "Supplier",
      paymentStatus: "Payment status",
      paymentMethod: "Payment method",
      recievedType: "Recieved type",
      customer: "Customer",
      orderNumber: "Order number",
      categoryNameEn: "Category name (EN)",
      categoryNameVn: "Category name (VN)",
      subCategoryNameEn: "Sub category name (EN)",
      subCategoryNameVn: "Sub category name (VN)",
      optional: "Optional",
    },
    placeholder: {
      enter: "Enter infomation",
      select: "Select",
      search: "Search",
      imagesUpload: "Select or drag image here",
      filesUpload: "Choose file",
      sortBy: "Sorting",
    },
    rule: {
      required: "This field is required",
      phone: "Phone invalid",
      email: "Email invalid",
      whiteSpace: "White space are not allowed",
      min: "{{min}} is minimum",
      max: "{{max}} is maximum",
      minLength: "Must have at least {{min}} character",
      maxLength: "Maximum length {{max}} characters",
    },
    others: {
      optional: "Optional",
      emptyOptions: "No options",
      districtsEmpty: "Please select city",
      wardsEmpty: "Please select district",
      subCategoryEmpty: "Please select category",
      fileSize: "File size must not greater than {{num}}MB",
      fileType: "Only accept file type {{type}}",
      fileMax: "Can only upload {{num}} image per time",
    },
  },
  unit: {
    quanity: "qty",
    date: 'date',
    day: "day",
    month: "month",
    year: "year",
  },
  status: {
    inStock: "In stock",
    outOfStock: "Out of stock",
    new: "New",
  },
  actions: {
    ok: "Ok",
    filter: "Filter",
    save: "Save",
    create: "Create",
    edit: "Edit",
    update: "Update",
    remove: "Remove",
    cancel: "Cancel",
    export: "Export excel",
  },
  table: {
    head: {
      name: "Name",
      customerName: "Full name",
      phone: "Phone",
      email: "Email",
      gender: "Gender",
      birthday: "Birthday",
      address: "Address",
      role: "Role",
      image: "Image",
      productName: "Name",
      quantity: "Quantity",
      price: "Price",
      orderNumber: "Order number",
      customer: 'Customer',
      status: "Status",
      paymentStatus: "Payment status",
      paymentMethod: "Payment method",
      receivedType: "Received method",
      origin: "Origin",
      unit: "Unit",
      inventory: "Inventory",
      inventoryStatus: "Inventory status",
      supplier: "Supplier",
      comment: "Comment",
      rate: "Rate",
      shipmentNumber: "Shipment number",
      totalPayment: "Total payment",
      category: 'Category',
      createdAt: "Created date",
      updatedAt: "Updated date",
    },
  },
  description: {
    remove: "Do you want to remove {{num}} selected rows?",
    noData:
      "Something went wrong. Look like there are trouble for getting data. Please try again or contact to our support team",
    empty: "No data",
    confirm: "Data once deleted cannot be restored. Are you sure you want to continue?",
  },
  message: {
    success: {
      create: "Created successfully",
      update: "Updated successfully",
      remove: "Removed successfully",
      signIn: "Sign in successfully",
      logout: "Logouted",
    },
    error: {
      authEmail: "Email is not correct. Please try again",
      authPassword: "Password is not correct. Please try again",
      signIn: "Sign in failed",
      logout: "Logout failed",
      create: "Error! Cannot create",
      update: "Error! Cannot update",
      remove: "Error! Cannot remove",
      api: "Api network failed",
    },
  },
};

export default common_en;
