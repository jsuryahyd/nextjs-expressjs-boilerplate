declare module NodeJS {
    interface Global {
      userRoles: any;
    }
  
    // interface Error{
    //     code:String
    // }
  }
  
  /*==================== database ================*/
  interface getEmployeeParams {
    limit: number;
    offset: number;
    role: number;
    restarantId: number;
  }
  
  //array
  interface restarantListResult {
    [index: number]: restaurantObjectResult;
    // [index:number]:{totalRestarants:number};
  }
  
  interface restaurantObjectResult {
    restarant_id: number;
    restarant_name: string;
    restarant_account_id: number;
    restarant_phone: String;
    restarant_location: String;
    restarant_city_id: number;
    restarant_address: String;
    restarant_status: number;
    restarant_created_at: string;
    restarant_timings: string;
    restarant_images: string;
    restarant_rating: number;
    admin_id: number;
    admin_role_id: number;
    admin_name: string;
    admin_user_name: string;
    admin_phone: string;
    admin_address: string;
    admin_email: string;
    admin_created_at: string;
  }
  
  interface employeeObjectResult {
    emp_id: number;
    emp_name: string;
    emp_user_name: string;
    emp_phone: string;
    emp_address: string;
    emp_email: string;
    emp_created_at: string;
    emp_status: number;
    emp_rest_branch_id: number;
  }
  
  interface dbConfig {
    dbHost: string;
    database: string;
    username: string;
    password: string;
  }
  
  interface limitOffset {
    limit: number;
    offset: number;
  }
  
  // restaurant head is optional
  interface addRestaurantParams {
    rName: string;
    rAName?: string;
    rAAddress: string;
    rAPhone: string;
    rAEmail?: string;
    rAPwd: string;
    rPhone: string;
    rOName?: string;
    rOAddress?: string;
    rOPhone?: string;
    rOEmail?: string;
    rOPwd?: string;
    rBranchName?: string;
    rLocation: string;
    rCityId: number;
    rAddress?: string;
    adminRole: number;
    ownerRole: number;
    rStatus: number;
    rTimings: string;
    rImage: string;
  }
  
  interface addEmployeeParams {
    restaurantId: number;
    name: string;
    userName: string;
    phone: string;
    pwd: string;
    email: string;
    role: number;
    address: string;
  }
  
  interface addTableParams {
    restarantId: number;
    tableNum: number;
    tableName: string;
    capacity: number;
    status: number;
  }
  
  interface getTablesFromDbParams {
    limit: number;
    offset: number;
    restarantId: number;
    status?: number;
    excludeStatus?: Array<number>;
  }
  
  interface dbGetTablesResult {
    table_id: number;
    table_name: string;
    table_table_no: number;
    table_branch_id: number;
    table_capacity: number;
    table_status: number;
  }
  
  interface assignTableToBearerParams {
    restarantId: number;
    bearerId: number;
    tableId: number;
  }
  
  interface getBearerTableAssignmentsParams {
    restarantId: number;
    limit: number;
    offset: number;
    notInArray: Array<number>;
    bearerId: number;
  }
  
  interface bearerTableAssignmentResponseItem {
    tableAssignmentId: number;
    bearerId: number;
    restaurantId: number;
    tableId: number;
    tableNumDisplay: string;
    tableNum: number;
    tableName: string;
    tableCapacity: number;
    orderSummary: string;
  }
  //-------------- add category
  interface addCategoryDbParams {
    restaurantId: number;
    categoryName: string;
    categoryDescription: string;
    categoryStatus: number;
    createdBy: number;
    categoryIcon: string;
  }
  
  //---------- get categories
  interface getCategoriesParams {
    restaurantId: number;
    limit: number;
    offset: number;
  }
  
  interface categoriesItemFromDb {
    cat_id: number;
    cat_branch_id: number;
    cat_title: string;
    cat_description: string;
    cat_status: number;
    cat_icon: string;
  }
  
  interface getCategoriesItem {
    categoryId: number;
    restaurantId: number;
    categoryName: string;
    categoryStatus: number;
    categoryDescription: string;
  }
  
  //-------------- add sub-category
  interface addSubCategoryDbParams {
    categoryId: number;
    subCategoryName: string;
    subCategoryDescription: string;
    subCategoryStatus: number;
    createdBy: number;
  }
  
  interface addSubCatDbResult {
    sub_cat_id: number;
    sub_cat_category_id: number;
    sub_cat_description: string;
    sub_cat_status: number;
    sub_cat_title: string;
  }
  
  //---------- get sub categories
  interface getSubCategoriesParams {
    categoryId?: number;
    limit: number;
    offset: number;
    restarantId?: number;
  }
  
  interface subCategoriesItemFromDb {
    sub_cat_id: number;
    sub_cat_category_id: number;
    sub_cat_title: string;
    sub_cat_description: string;
    sub_cat_status: number;
    cat_title: string;
  }
  
  interface getSubCategoriesItem {
    categoryId: number;
    subCategoryId: number;
    subCategoryName: string;
    subCategoryStatus: number;
    subCategoryDescription: string;
  }
  
  interface DB_addMenuParams {
    restaurant_id: number;
    menu_title: string;
    menu_description: string;
    timings: any;
    menu_status: number;
  }
  
  interface DB_getMenuListParams {
    restaurantId: number;
    limit: number;
    offset: number;
  }
  
  interface getMenuListResult {
    menu_id: number;
    menu_title: string;
    menu_branch_id: number;
    menu_description: string;
    menu_created_at: string;
    menu_updated_at: string;
    menu_status: number;
  }
  
  interface MenuListResponseItem {
    menuId: number;
    menuTitle: string;
    restaurantId: number;
    menuDescription: string;
    menuCreatedAt: string;
    menuUpdatedAt: string;
    menuStatus: number;
  }
  
  interface DB_saveMenuItemParams {
    menuId?: number;
    itemTitle: string;
    itemDescription: string;
    itemVariation: string | number;
    itemSubCategory: number;
    itemPrice: number;
    itemCategory: number;
    itemStatus: number;
    createdBy: number;
    itemType: number;
  }
  
  interface DB_selectItemsParams {
    limit: number;
    offset: number;
    restaurantId?: string;
    categoryId?: string;
    subCategoryId?: string;
    menuId?: string;
  }
  
  interface menuItemsListFromDb {
    item_id: number;
    item_title: string;
    item_description: string;
    item_variation_title: string;
    item_menu_id: number;
    cat_title: string;
    sub_cat_title: string;
    item_sub_category_id: number;
    item_category_id: number;
    item_type: number;
    item_price: number;
    item_status: number;
    item_created_at: string;
    item_updated_at: string;
    menu_id?: number;
    menu_branch_id?: number;
  }
  
  interface itemsListResponseObject {
    menuId: number;
    categoryId: number;
    itemTitle: string;
    itemQuantity: string;
    itemPrice: number;
    itemCreatedAt: string;
    itemUpdatedAt: string;
    itemDescription: string;
    subCategoryId: number;
    itemStatus: number;
    itemType: number;
  }
  
  interface DB_saveGuestParams {
    name: string;
    phone: string;
    address: string;
    pwd: string;
    email: string;
    status: number;
  }
  
  interface orderItemsResultItem {
    order_item_id: number;
    order_item_order_id: number;
    order_item_title: string;
    order_item_price: number;
    order_item_tax: number;
    order_item_currency_id: number;
  }
  
  interface DB_saveOrderParams {
    orderCurrencyId: number;
    userId: number;
    guestId: string;
    restaurantId: number;
    orderSummary: string;
    orderTotal: number;
    orderTax: number;
    orderStatus: number;
  }
  
  interface DB_orderResult {
    order_id: number;
    order_guest_id: number;
    order_branch_id: number;
    order_summary: string;
    order_total_amount: number;
    order_tax_amount: number;
    order_currency_id: number;
    order_created_at: string;
    order_updated_at: string;
    order_status: number;
    guest_name: string;
    guest_email: string;
    guest_address: string;
    guest_status: number;
  }
  
  interface DB_restaurantOrdersResultItem {
    guest_id: number;
    guest_name: string;
    guest_email: string;
    guest_address: string;
    guest_status: number;
    guest_phone: string;
    order_id: number;
    order_guest_id: number;
    order_branch_id: number;
    order_total_amount: number;
    order_tax_amount: number;
    order_currency_id: number;
    order_summary: string;
    order_created_at: string;
    order_updated_at: string;
    order_status: number;
    table_assignment_table_id: number;
    table_assignment_guest_id: number;
    table_assignment_status: number;
    invoice_id: number;
    invoice_file_link: string;
    invoice_generated_at: string;
    invoice_confirmed_at: string;
    invoice_paid_at: string;
    bearer_id: string;
    bearer_name: string;
    bearer_user_name: string;
    table_num: string | number;
    payment_mode: string;
  }
  
  interface dbUserResult {
    emp_id: number;
    emp_rest_branch_id: number;
    emp_name: string;
    emp_user_name: string;
    emp_phone: string;
    emp_address: string;
    emp_email: string;
    emp_pwd: string;
    emp_created_at: string;
    emp_status: number;
    emp_role_role_id: number;
    rest_branch_status: number;
  }
  
  interface dbAdminResult {
    userId: number;
    name: string;
    userName: string;
    phone: string;
    email: string;
    pwd: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    restarantId: number;
    restarantName: string;
  }
  
  interface dbGuestResult {
    guest_id: number;
    guest_name: string;
    guest_phone: string;
    guest_email: string;
    guest_address: string;
    guest_pwd: string;
    guest_status: number;
    guest_created_at: string;
  }
  
  interface createAssignmentDbArgs {
    tableId?: number;
    guestId: number;
    empId: number;
    numSeats: number;
    restarantId: number;
    tableStatusCode: number;
    tableAssignmentDisplayNum: string | null;
  }
  
  interface tableAssignmentsDbParams {
    restarauntId: number;
    statusArray: Array<number>;
    limit?: number;
    offset?: number;
  }
  
  interface createOrderDbParams {
    cartSummary: string;
    restarantId: number;
    assignmentId: number;
    orderTotal: number;
    orderTax: number;
    orderStatus: number;
  }
  
  interface createTakeAwayOrderDbParams {
    cartSummary: string;
    restarantId: number;
    customer_name: string;
    customer_phone: string;
    guest_id?: number;
    orderTotal: number;
    orderTax: number;
    orderStatus: number;
    emp_id: number;
  }
  
  interface tablesAndAssignmentsDbResult {
    tableId: number;
    tableName: string;
    tableNum: number;
    tableCapacity: number;
    tableStatus: number;
    guestId: number;
    occupiedSeats: number;
    assignmentStatus: number;
  }
  
  interface guestPastOrdersDbResult {
    orderId: number;
    tableAssignmentId: number;
    orderBranchId: number;
    orderTotal: number;
    orderTax: number;
    orderCurrencyId: number;
    orderCreatedAt: string;
    orderStatus: number;
    tableAssignmentTableId: number;
    restarantId: number;
    restarantName: string;
    restarantPhone: string;
    restarantLocation: string;
    restarantAddress: string;
    restarantStatus: number;
    restarantTimings: string;
    tableNum: number;
    orderTableId: number;
    invoiceId: number;
    invoiceLink: string;
    restarantImages: string;
  }
  
  interface invoiceDetailsDbResult {
    invoiceId: number;
    invoiceOrderId: number;
    invoiceFileLink: string;
    invoiceRequestedAt: string;
    invoiceGeneratedAt: string;
    invoicePaidAt: string;
    tableId: number;
    tableNum: number;
    guestId: number;
    guestName: string;
    guestPhone: string;
    orderId: number;
    orderTableAssignmentId: number;
    restarantId: number;
    orderSummary: string;
    orderTotalAmount: number;
    orderTaxAmount: number;
    orderCreatedAt: string;
    orderStatus: number;
  }
  
  interface invoiceDetails_guestDbResult {
    invoiceId: number;
    invoiceOrderId: number;
    invoiceFileLink: string;
    invoiceRequestedAt: string;
    invoiceGeneratedAt: string;
    invoicePaidAt: string;
    tableId: number;
    tableNum: number;
    restarantName: string;
    restarantImages: string;
    orderId: number;
    orderTableAssignmentId: number;
    restarantId: number;
    orderSummary: string;
    orderTotalAmount: number;
    orderTaxAmount: number;
    orderCreatedAt: string;
    orderStatus: number;
  }
  
  interface chefPastOrdersDbResult {
    orderId: number;
    orderTableAssignmentId: number;
    restarantId: number;
    orderSummary: string;
    orderChefId: number;
    orderCreatedAt: number;
    orderStatus: number;
  }
  
  interface ongoingOrdersDbResult {
    orderId: number;
    restarantId: number;
    orderTotal: number;
    orderTax: number;
    orderCurrencyId: number;
    orderSummary: string;
    orderCreatedAt: string;
    orderUpdatedAt: string;
    orderStatus: number;
    assignmentId: number;
    tableId: number;
    assignmentStatus: number;
    tableName: string;
    tableNum: number;
    guestName: string;
    guestId: number;
    guestPhone: string;
    tableCapacity: number;
    tableStatus: number;
    waiterId: number;
    restarantName: string;
    waiterName: string;
  }
  
  interface ongoingOrdersResponse
    extends Pick<
      ongoingOrdersDbResult,
      Exclude<keyof ongoingOrdersResponse, "orderSummary">
    > {
    orderSummary: any;
  }
  
  interface editMenuDbParams {
    itemId: number;
    itemQt: number;
    itemDesc: string;
    itemPrice: number;
    itemTitle: string;
    itemCatId: number;
    itemType: number;
    itemSubCatId: number;
  }
  
  interface feedbackDbParams {
    userName: string;
    userPhone: string;
    userId: number;
    userComments: string;
  }
  
  interface receptionistQueueListResult {
    tableAssignmentId: number;
    tableId: number;
    guestId: number;
    // bearerId:number;
    // receptionistId:number;
    tableAssignmentStatus: number;
    createdAt: string;
    agreedToSplit: number;
    guestName: string;
    guestPhone: string;
    numGuests: string;
    tableName: string;
    tableNum: string;
  }
  interface updateOrderCartDBParams {
    cartSummary: string;
    orderTotal: number;
    orderTax: number;
    orderStatus: number;
    orderId: number;
    orderClosedStatusId: number;
  }
  /*=============== database interfaces end =================*/
  
  interface getReqFailedResponse {
    success: boolean;
    msg: any;
    limit: number;
    offset: number;
  }
  
  interface getReqSuccessResponse {
    success: boolean;
    data: any;
    // msg?:string,
    limit: number;
    offset: number;
    total?: number;
  }
  
  interface userDataOnLoginResponse {
    userId: string;
    userName: string;
    userUserName: string;
    userRoles: Array<number>;
    userPhone: string;
    userEmail: string;
    userAddress: string;
    userCreatedAt: string;
    userStatus: number;
    userRestaurantId?: number;
    isGuest?: boolean;
  }
  
  interface userLoginSuccessData {
    success: boolean;
    msg: String;
    token: string;
    constants: {
      userRoles: any;
      statusCodes: Array<any>;
      apiBasePath: String;
      apiRoutes: any;
      foodTypes: any;
      countryCode: string;
    };
    locationAPIKey?: string;
    deviceTokenRegd?: boolean;
    user: userDataOnLoginResponse;
  }
  
  interface userTokenObject {
    userId: string;
    userName: string;
    userRoles: number[];
    userPhone: string;
    isGuest: boolean;
    userRestarantIds: number[];
  }
  
  interface assignmentResponse {
    guestId: string;
    guestName: string;
    guestPhone: string;
    guestAddress: string;
    tableAssignmentStatus: number;
    guest_status: number;
    numSeats: number;
    tableAssignmentId: string;
    tableId: string;
  }
  
  interface bookTableSuccessResponse {
    success: boolean;
    // data:Array<assignmentResponse>,
    data: assignmentResponse;
  }
  
  //--------- constants ---------------
  interface constants_statusDefs {
    TABLE_AVAILABLE: number;
    TABLE_UNAVAILABLE: number;
    TABLE_OCCUPIED: number;
    TABLE_SPLIT: number;
    RESTAURANT_ACTIVE: number;
    RESTAURANT_INACTIVE: number;
    TABLE_ASSIGNMENT_ASSIGNED: number;
    TABLE_ASSIGNMENT_SEATED: number;
    TABLE_ASSIGNMENT_COOKING: number;
    TABLE_ASSIGNMENT_SERVED: number;
    TABLE_ASSIGNMENT_ENDED: number;
    TABLE_ASSIGNMENT_PENDING: number;
    ORDER_PLACED: number;
    ORDER_COOKING: number;
    ORDER_READY_TO_SERVE: number;
    ORDER_SERVED: number;
    ORDER_CLOSED: number;
    ORDER_DELIVERED: number;
    TAKE_AWAY_ORDER_COMPLETED: number;
    RESERVATION_PENDING: number;
    RESERVATION_CANCELLED: number;
    RESERVATION_COMPLETED: number;
    RESERVATION_ARRIVED: number;
    TABLE_REMOVED: number;
    TABLE_ASSIGNMENT_REMOVED: number;
  }
  
  interface constants_userRoles {
    RECEPTIONIST: number;
    BEARER: number;
    CHEF: number;
    ADMIN: number;
    SUPER_ADMIN: number;
    OWNER: number;
    GUEST: number;
  }
  
  // -------------
  interface fcmDevice {
    deviceType: string;
    deviceToken: string;
    isSandbox: boolean;
  }
  interface advanceQueueAndSendNotificationsParams {
    restarantId: number;
    status: number;
    statusDefs: constants_statusDefs;
    tableDetails: onGoingAssignmentsOfATable;
    USER_ROLES: constants_userRoles;
    tableId: number;
    receptionistDevices?: fcmDevice[];
  }
  
  interface onGoingAssignmentsOfATable {
    tableId: number;
    tableNum: number;
    tableAssignmentsCount: number;
    currentAssignmentNames: string | null;
    capacity: number;
    tableAssignmentId: number;
    occupiedSeats: number | null;
    tableAssignmentStatus: number;
    tableStatus: number;
    restarantId: number;
    restarantStatus: number;
  }
  
  interface notificationDevice {
    deviceToken: string;
    deviceType: string;
    userId: number;
    userRole: number;
  }
  
  /**
   * data models
   */
  
  interface cartSummary {
    cart: Array<cartItem>;
    orderTax: number;
    orderTotal: number;
    tableNumDisplay: string;
    taxRate: number;
  }
  
  interface cartItem {
    categoryId: number;
    categoryName: string;
    comment: string;
    itemComment: string;
    itemCreatedAt: string;
    itemDescription: string;
    itemId: string;
    itemOrderStatus: { unserved: number; served: number };
    itemPrice: number;
    itemQuantity: number;
    itemStatus: number;
    itemTitle: string;
    itemType: number;
    itemUpdatedAt: string;
    menuId: number;
    orderStatus: number;
    qty: number;
    subCategoryId: number;
    subCategoryName: string;
  }
  