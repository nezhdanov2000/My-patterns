// Beverage.cs
public abstract class Beverage
{
    protected ISizeStrategy sizeStrategy;

    public void SetSizeStrategy(ISizeStrategy sizeStrategy)
    {
        this.sizeStrategy = sizeStrategy;
    }

    public abstract string GetDescription();
}
