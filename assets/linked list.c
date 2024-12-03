using System;
class Node
{
    public int data;
    public Node next;
    public Node(int d)
    {
        data = d;
        next = null;
    }
}

class Solution
{
    public static Node insert(Node head, int data)
    {
        // Membuat node baru
        Node newNode = new Node(data);
        // Jika linked list kosong
        if (head == null)
        {
            head = newNode;
        }
        else
        {
            // Iterasi ke node terakhir
            Node current = head;
            while (current.next != null)
            {
                current = current.next;
            }
            // Tambahkan node baru di akhir
            current.next = newNode;
        }
        return head;
    }

    public static void display(Node head)
    {
        Node start = head;
        while (start != null)
        {
            Console.Write(start.data + " ");
            start = start.next;
        }
    }

    static void Main(String[] args)
    {
        Node head = null;
        int T = Int32.Parse(Console.ReadLine()); // Membaca jumlah data
        while (T-- > 0)
        {
            int data = Int32.Parse(Console.ReadLine()); // Membaca data elemen
            head = insert(head, data); // Menambahkan elemen ke linked list
        }
        display(head); // Menampilkan linked list
    }
}
