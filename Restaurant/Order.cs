using System.Collections.Generic;

public class Order
{
    public int OrderId { get; set; }
    public List<string> Items { get; set; }
    public string Status { get; set; }

    public Order(int orderId, List<string> items, string status)
    {
        OrderId = orderId;
        Items = items;
        Status = status;
    }
}
